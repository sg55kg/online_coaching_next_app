import {Modal, ModalBody} from "@chakra-ui/modal";
import {ChangeEvent, Dispatch, FC, SetStateAction, useState} from "react";
import {Input, InputGroup, InputRightAddon} from "@chakra-ui/input";
import {AthleteData} from "../../types";
import {Button, Stack} from "@chakra-ui/react";
import {useCoachContext} from "../../contexts/CoachContext";

interface NewProgramModalProps {
    isOpen: boolean,
    onClose: () => void,
    athlete?: AthleteData,

}

enum endDateOptions {
    WEEKS = 'WEEKS',
    MONTHS = 'MONTHS'
}

const NewProgramModal: FC<NewProgramModalProps> = ({ isOpen, onClose, athlete }) => {

    const { athletes } = useCoachContext()

    const [newProgram, setNewProgram] = useState({
        athlete: athlete,
        startDate: new Date(),
        endDate: new Date(),
    })

    const [endDateMeasurement, setEndDateMeasurement] = useState<string>(endDateOptions.WEEKS)

    const calculateEndDate = (startDate: Date, programLength: number) => {
        const measurement: string = endDateMeasurement
        let endDate: Date
        if(measurement === endDateOptions.WEEKS) {
            endDate = new Date(startDate.getDate() + programLength * 7)
        } else {
            endDate = new Date()
            endDate.setMonth(startDate.getMonth() + programLength)
        }
        setNewProgram({
            ...newProgram,
            endDate: endDate
        })
    }

    const handleSelectAthlete = (e: ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === '' || e.target.value === null)
            return setNewProgram({ ...newProgram, athlete: null })

        const athleteToSelect = athletes.find(a => a.id === e.target.value)
        setNewProgram({ ...newProgram, athlete: athleteToSelect })
    }

    const handleSaveProgram = async () => {

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalBody>
                <label>Athlete</label>
                <select onChange={handleSelectAthlete}>
                    <option selected={athlete === null}> </option>
                    {athletes.length > 0 && athletes.map((ath, idx) => {
                        return (
                            <option selected={athlete.id === ath.id} key={ath.id} value={ath.id}>{ath.name}</option>
                        )
                    })}
                </select>
                <label>Start Date</label>
                <Input
                    onChange={(e) => setNewProgram({ ...newProgram, startDate: new Date(e.target.value) })}
                    type="date"
                    value={newProgram.startDate.toDateString()}
                />
                <Stack>
                    <InputGroup>
                        <label>Program Length</label>
                        <Input
                            onChange={(e) => calculateEndDate(newProgram.startDate, parseInt(e.target.value))}
                            type="number"
                        />
                        <InputRightAddon
                            children={
                                <select
                                    value={endDateMeasurement}
                                    onChange={(e) => setEndDateMeasurement(e.target.value)}
                                >
                                    <option value={endDateOptions.WEEKS}>Weeks</option>
                                    <option value={endDateOptions.MONTHS}>Months</option>
                                </select>
                            }
                        />
                    </InputGroup>
                </Stack>
                <Button
                    onClick={handleSaveProgram}
                >
                    Create
                </Button>
            </ModalBody>
        </Modal>
    )
}

export default NewProgramModal