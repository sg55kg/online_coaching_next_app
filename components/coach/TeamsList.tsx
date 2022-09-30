import {useCoachContext} from "../../contexts/CoachContext";
import Link from "next/link";
import {Button} from "@chakra-ui/react";
import AddTeamModal from "./AddTeamModal";
import {useState} from "react";


const TeamsList = () => {

    const { teams } = useCoachContext()
    const [showModal, setShowModal] = useState<boolean>(false)
    const toggleModal = () => setShowModal(prev => !prev)

    return (
        <div>
            {teams.length > 0 && teams.map(team => {
                return (
                    <div>
                        {team.name}
                        <Link href={`/coach/teams/${team.id}`} >
                            Options
                        </Link>
                    </div>
                )
            })}
            {teams.length < 1 &&
                <div>
                    You don't have any active teams right now
                </div>
            }
            <Button
                onClick={toggleModal}
            >
                Create Team
            </Button>
            <AddTeamModal
                show={showModal}
                toggle={toggleModal}
            />
        </div>
    )
}

export default TeamsList