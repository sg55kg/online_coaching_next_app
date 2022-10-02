import {NextPage} from "next";
import CoachLayout from "../../../layouts/CoachLayout";
import {Button} from "@chakra-ui/react";

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

const TeamPage: NextPage = () => {


    return (
        <CoachLayout>
            <div>
                {mockAthletes.map((athlete, idx) => {
                    return (
                        <div key={idx}>
                            <p>{athlete.name}</p>
                            {athlete.currentProgram ?
                                <p>Current Program</p> :
                                <div>
                                    <p>{`${athlete.name} does not have a program`}</p>
                                    <Button>
                                        Start new program
                                    </Button>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </CoachLayout>
    )
}

export default TeamPage