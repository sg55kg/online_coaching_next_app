import {createContext, useContext, useEffect, useState} from "react";
import {useAuth} from "./AuthContext";
import {AthleteData, CoachData, TeamData} from "../types";


const CoachContext = createContext(null!)

export const useCoachContext = () => {
    return useContext(CoachContext)
}

const CoachProvider = ({ children }) => {

    const { user } = useAuth()

    const [coach, setCoach] = useState<CoachData>(null)
    const [teams, setTeams] = useState<TeamData[]>([])
    const [allAthletes, setAllAthletes] = useState<AthleteData[]>([])
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        const fetchCoachData = async () => {
            setLoading(true)
            const res = await fetch(`/api/coaches/${user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            const coach: CoachData = await res.json()
            console.log(coach)
            setCoach(coach)
            setTeams(coach.teams)
            setAllAthletes(coach.athletes)
            setLoading(false)
        }
        if(user && coach === null) {
            fetchCoachData()
        }
    },[user, coach])

    const value = {
        coach,
        teams,
        allAthletes
    }

    return (
        <CoachContext.Provider value={value}>
            {!loading && children}
        </CoachContext.Provider>
    )
}

export default CoachProvider