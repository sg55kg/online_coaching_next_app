import {NextPage} from "next";
import CoachProvider from "../../../contexts/CoachContext";
import TeamsList from "../../../components/coach/TeamsList";


const Teams: NextPage = () => {

    return (
        <CoachProvider>
            <TeamsList />
        </CoachProvider>
    )
}

export default Teams