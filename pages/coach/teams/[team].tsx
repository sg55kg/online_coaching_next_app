import {NextPage} from "next";
import CoachLayout from "../../../layouts/CoachLayout";
import {Button} from "@chakra-ui/react";
import TeamOverview from "../../../components/coach/TeamOverview/TeamOverview";


const TeamPage: NextPage = () => {


    return (
        <CoachLayout>
            <TeamOverview />
        </CoachLayout>
    )
}

export default TeamPage