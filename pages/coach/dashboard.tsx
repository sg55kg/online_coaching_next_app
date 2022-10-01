import {NextPage} from "next";
import CoachProvider from "../../contexts/CoachContext";
import CoachLayout from "../../layouts/CoachLayout";
import {useAuth} from "../../contexts/AuthContext";
import ActivityFeed from "../../components/coach/ActivityFeed";


const Dashboard: NextPage = () => {

    const { user } = useAuth()

    return (
        <CoachLayout>
            <div>
                <h1>
                    {user && `Welcome, ${user.name}`}
                </h1>
            </div>
            <ActivityFeed />
        </CoachLayout>
    )
}

export default Dashboard