import {NextPage} from "next";
import {Button} from "@chakra-ui/react";
import {useModal} from "../../../hooks/useModal";
import NewProgramModal from "../../../components/coach/NewProgramModal";


const Program: NextPage = () => {

    const { viewModal, toggleModal } = useModal()

    return (
        <div>
            <div>
                Program list?
            </div>
            <Button
                onClick={toggleModal}
            >
                Write New Program
            </Button>
            <NewProgramModal
                isOpen={viewModal}
                onClose={toggleModal}
            />
        </div>
    )
}

export default Program