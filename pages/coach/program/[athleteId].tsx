import {NextPage} from "next";
import {Button} from "@chakra-ui/react";
import {useModal} from "../../../hooks/useModal";
import NewProgramModal from "../../../components/coach/NewProgramModal";
import {useCoachContext} from "../../../contexts/CoachContext";
import {useRouter} from "next/router";
import CoachLayout from "../../../layouts/CoachLayout";

const mockExercises = [
    {
        name: 'Snatch',
        sport: 'WEIGHTLIFTING',
        totalRepetitions: 18,
        sets: 6,
        repsPerSet: 3,
        repsCompleted: 0,
        weight: 100
    }
]

const mockDays = [
    {
        exercises: mockExercises
    }
]

const mockWeek = {
    days: mockDays
}



const AthleteProgramPage: NextPage = () => {

    return (
        <CoachLayout>
            <AthleteProgramPage />
        </CoachLayout>
    )
}

export default AthleteProgramPage