import {NextPage} from "next";
import TeamsList from "../../../components/coach/TeamsList";
import CoachLayout from "../../../layouts/CoachLayout";


const Teams: NextPage = () => {

    return (
        <CoachLayout>
            <TeamsList />
        </CoachLayout>
    )
}

export default Teams