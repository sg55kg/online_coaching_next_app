import {NextPage} from "next";

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



const WriteProgramPage: NextPage = () => {

    return (
        <div>
            To do: UI for writing an athlete's program
        </div>
    )
}

export default WriteProgramPage