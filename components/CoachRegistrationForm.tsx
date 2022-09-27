import {FC, useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {AthleteData, CoachData, TeamData, UserData} from "../types";
import {useRouter} from "next/router";
import {prisma} from "../pages/api/auth/[...nextauth]";



const CoachRegistrationForm: FC = () => {

    const router = useRouter()
    const { user, updateUserData } = useAuth()
    const [teamName, setTeamName] = useState<string>('')
console.log(user)
    const handleSubmit = async () => {
        const newCoach = {
            userId: user.id,
        }

        const coachRes = await fetch('/api/coaches', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ coach: newCoach })
        })
        const savedCoach: CoachData = await coachRes.json()

        let updatedUser = {
            userType: 'COACH'
        }

        await updateUserData(updatedUser)

        const newTeam = {
            name: teamName,
            coachId: savedCoach.id
        }

        const teamRes = await fetch('/api/teams', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ team: newTeam })
        })
        const savedTeam: TeamData = await teamRes.json()

        router.push('/coach/dashboard')
    }

    return (
        <div>
            <h1>Let's get started...</h1>
            <div>
                <h4>Create your first team</h4>
                <input
                    type="text"
                    placeholder="Give your team a name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default CoachRegistrationForm