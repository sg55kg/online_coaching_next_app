import {NextPage} from "next";
import CoachProvider from "../../../contexts/CoachContext";


const TeamPage: NextPage = () => {

    return (
        <CoachProvider>
            Team Test
        </CoachProvider>
    )
}

export default TeamPage