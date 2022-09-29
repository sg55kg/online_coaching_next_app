import {FC} from "react";
import {useCoachContext} from "../../contexts/CoachContext";
import Link from "next/link";


const CoachNav: FC = () => {

    const { coach, teams } = useCoachContext()

    return (
        <div style={{ border: '1px solid red' }}>
            <div>
                <h4>
                    My Teams
                </h4>
                {teams.length > 0 && teams.map((team, index) => {
                    return (
                        <div>
                            <Link href={`teams/${team.id}`} >{team.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CoachNav