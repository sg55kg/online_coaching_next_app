import {useRouter} from "next/router";
import {useModal} from "../../hooks/useModal";
import {useCoachContext} from "../../contexts/CoachContext";
import {Button} from "@chakra-ui/react";
import NewProgramModal from "./NewProgramModal";


const AthleteProgramOverview = () => {

    const router = useRouter()
    const { athleteId } = router.query
    const { viewModal, toggleModal } = useModal()
    const { athletes } = useCoachContext()

    const currentAthlete = athletes.find(a => a.id === athleteId)

    return (
        <div>
            <div>Current program overview here if it exists</div>
            <div>
                No Program, then:
                <Button
                    onClick={toggleModal}
                >
                    Create new Program
                </Button>
            </div>
            <NewProgramModal isOpen={viewModal} onClose={toggleModal} athlete={currentAthlete} />
        </div>
    )
}

export default AthleteProgramOverview