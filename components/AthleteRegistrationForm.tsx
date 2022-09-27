import {FC, useEffect, useState} from "react";
import {useAuth} from "../contexts/AuthContext";


const AthleteRegistrationForm: FC = () => {

    const { user } = useAuth()

    const [coachInput, setCoachInput] = useState<string>('')
    const [teamInput, setTeamInput] = useState<string>('')
    const [coaches, setCoaches] = useState([])
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        if(coachInput.length < 2) return
        const getData = setTimeout(() => {
            setLoading(true)
            fetch(`/api/coaches/search/${coachInput}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then((data) => {
                    setCoaches(data)
                    setTeams([])
                    setLoading(false)
                })
            })
        },2000)
        return () => clearTimeout(getData)
    },[coachInput])

    useEffect(() => {
        if(teamInput.length < 2) return
        const getData = setTimeout(() => {
            setLoading(true)
            fetch(`api/teams/search/${teamInput}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then(data => {
                    setTeams(data)
                    setCoaches([])
                    setLoading(false)
                })
            })
        }, 2000)
        return () => clearTimeout(getData)
    },[teamInput])

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search Coaches"
                    value={coachInput}
                    onChange={(e) => setCoachInput(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search Teams"
                    value={teamInput}
                    onChange={(e) => setTeamInput(e.target.value)}
                />
            </div>
            <div>
                {loading &&
                    <p>Searching...</p>
                }
                {coaches.length > 0 && coaches.map((coach, idx) => {
                    return (
                        <div key={idx}>{coach.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default AthleteRegistrationForm