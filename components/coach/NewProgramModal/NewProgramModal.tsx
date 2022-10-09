import {Modal, ModalBody, ModalContent, ModalOverlay} from "@chakra-ui/modal";
import {ChangeEvent, FC, useState} from "react";
import {Input, InputGroup, InputRightAddon} from "@chakra-ui/input";
import {Button, Flex, Stack, VStack} from "@chakra-ui/react";
import {useCoachContext} from "../../../contexts/CoachContext";
import {EndDateOptions, NewProgramModalProps} from "./constants";
import {calculateEndDate, handleSaveProgram} from "./util";


const NewProgramModal: FC<NewProgramModalProps> = ({ isOpen, onClose, athlete }) => {

    const { allAthletes } = useCoachContext()

    const [newProgram, setNewProgram] = useState({
        athlete: athlete,
        startDate: new Date(),
        endDate: new Date(),
    })
console.log(newProgram)
    const [endDateMeasurement, setEndDateMeasurement] = useState<EndDateOptions>(EndDateOptions.WEEKS)


    const handleSelectAthlete = (e: ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === '' || e.target.value === null)
            return setNewProgram({ ...newProgram, athlete: null })

        const athleteToSelect = allAthletes.find(a => a.id === e.target.value)
        setNewProgram({ ...newProgram, athlete: athleteToSelect })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <VStack>
                        <label>Athlete</label>
                        <select onChange={handleSelectAthlete}>
                            <option selected={athlete === null}>None selected</option>
                            {allAthletes?.length > 0 && allAthletes.map((ath, idx) => {
                                return (
                                    <option
                                        selected={athlete.id === ath.id}
                                        key={ath.id}
                                        value={ath.id}
                                    >
                                        {ath.name}
                                    </option>
                                )
                            })}
                        </select>
                    </VStack>
                    <VStack>
                        <label>Start Date</label>
                        <Input
                            onChange={(e) => setNewProgram({ ...newProgram, startDate: new Date(e.target.value) })}
                            type="date"
                            value={newProgram.startDate.toDateString()}
                        />
                    </VStack>
                    <Stack>
                        <label>Program Length</label>
                        <InputGroup>
                            <Input
                                onChange={(e) => {
                                    setNewProgram({
                                        ...newProgram,
                                        endDate: calculateEndDate(
                                            newProgram.startDate,
                                            parseInt(e.target.value),
                                            endDateMeasurement
                                        )
                                    })
                                }}
                                type="number"
                            />
                            <InputRightAddon
                                children={
                                    <select
                                        value={endDateMeasurement}
                                        onChange={(e) => setEndDateMeasurement(e.target.value as EndDateOptions)}
                                    >
                                        <option value={EndDateOptions.WEEKS}>Weeks</option>
                                        <option value={EndDateOptions.MONTHS}>Months</option>
                                    </select>
                                }
                            />
                        </InputGroup>
                    </Stack>
                    <Flex m={'1em'}>
                        <Button
                            onClick={() => handleSaveProgram(newProgram)}
                            m={'auto'}
                        >
                            Create
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default NewProgramModal