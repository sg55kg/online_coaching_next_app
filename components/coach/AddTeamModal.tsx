import {FC, useState} from "react";
import {Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";
import {Input} from "@chakra-ui/input";
import {Button} from "@chakra-ui/react";

interface AddTeamModalProps {
    show: boolean,
    toggle: () => void
}

const AddTeamModal: FC<AddTeamModalProps> = ({ show, toggle }) => {

    const [newTeamName, setNewTeamName] = useState<string>('')

    return (
        <Modal
            isOpen={show}
            onClose={toggle}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    New Team
                </ModalHeader>
                <ModalBody>
                    <Input
                        placeholder="Enter your team's name"
                        value={newTeamName}
                        onChange={(e) => setNewTeamName(e.target.value)}
                    />
                    <Button>
                        Save
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AddTeamModal