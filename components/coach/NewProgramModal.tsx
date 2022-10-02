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

const NewProgramModal: FC<NewProgramModalProps> = ({ isOpen, onClose }) => {

    const [newProgram, setNewProgram] = useState({
        athlete: '',
        startDate: new Date(),
        endDate: new Date(),
    })

    const calculateEndDate = (startDate: Date, programLength: any) => {

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
                                <select>
                                    <option>Weeks</option>
                                    <option>Months</option>
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