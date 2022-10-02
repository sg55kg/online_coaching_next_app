import {Modal, ModalBody} from "@chakra-ui/modal";
import {Dispatch, FC, SetStateAction, useState} from "react";
import {Input, InputGroup, InputRightAddon} from "@chakra-ui/input";
import {AthleteData} from "../../types";
import {Button, Stack} from "@chakra-ui/react";

interface NewProgramModalProps {
    isOpen: boolean,
    onClose: () => void,
    athlete?: AthleteData,

}

enum endDateOptions {
    WEEKS = 'WEEKS',
    MONTHS = 'MONTHS'
}

const NewProgramModal: FC<NewProgramModalProps> = ({ isOpen, onClose }) => {

    const [newProgram, setNewProgram] = useState({
        athlete: '',
        startDate: new Date(),
        endDate: new Date(),
    })

    const [endDateMeasurement, setEndDateMeasurement] = useState<string>(endDateOptions.WEEKS)

    const calculateEndDate = (startDate: Date, programLength: number) => {
        const measurement: string = endDateMeasurement

    }

    const handleSaveProgram = async () => {

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalBody>
                <label>Athlete</label>
                <Input type="text" />
                <label>Start Date</label>
                <Input type="date" />
                <Stack>
                    <InputGroup>
                        <label>Program Length</label>
                        <Input type="number" />
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