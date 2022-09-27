import {createContext, useContext, useEffect, useState} from "react";
import {useAuth} from "./AuthContext";
import {CoachData} from "../types";


const CoachContext = createContext(null!)

export const useCoachContext = () => {
    return useContext(CoachContext)
}

const CoachProvider = ({ children }) => {

    const { user } = useAuth()

    const [coach, setCoach] = useState(null)
    const [teams, setTeams] = useState([])
    const [allAthletes, setAllAthletes] = useState([])

    useEffect(() => {
        const fetchCoachData = async () => {
            const res = await fetch(`/api/coaches/${user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            const coach: CoachData = await res.json()
            setCoach(coach)
            setTeams(coach.teams)
            setAllAthletes(coach.athletes)
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
            {children}
        </CoachContext.Provider>
    )
}

export default CoachProvider