import {FC, useState} from "react";
import {Button} from "@chakra-ui/react";
import NewProgramModal from "../NewProgramModal/NewProgramModal";
import {useCoachContext} from "../../../contexts/CoachContext";

const mockAthletes = [
    {
        name: 'Jeff Smith',
        age: 26,
        email: 'email@email',
        programs: [],
        currentProgram: null
    },
    {
        name: 'Angela Something',
        age: 30,
        email: 'email@email',
        programs: [],
        currentProgram: null
    },
    {
        name: 'Tim Swords',
        age: 19,
        email: 'email@email',
        programs: [],
        currentProgram: null
    },
]

const TeamOverview: FC = () => {

    const [viewModal, setViewModal] = useState(false)
    const [selectedAthlete, setSelectedAthlete] = useState(null)

    const toggleModal = () => setViewModal(prev => !prev)

    return (
        <div>
            {mockAthletes.map((athlete, idx) => {
                return (
                    <div key={idx}>
                        <p>{athlete.name}</p>
                        {athlete.currentProgram ?
                            <p>Current Program</p> :
                            <div>
                                <p>{`${athlete.name} does not have a program`}</p>
                                <Button onClick={() => { toggleModal(); setSelectedAthlete(athlete)}}>
                                    Start new program
                                </Button>
                            </div>
                        }
                    </div>
                )
            })}
            <NewProgramModal isOpen={viewModal} onClose={toggleModal} athlete={selectedAthlete} />
        </div>
    )
}

export default TeamOverview