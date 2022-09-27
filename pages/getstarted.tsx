import {NextPage} from "next";
import {useState} from "react";
import CoachRegistrationForm from "../components/CoachRegistrationForm";


const GetStarted: NextPage = () => {

    const [isCoach, setIsCoach] = useState(false)
    const [isAthlete, setIsAthlete] = useState(false)

    return (
        <div>
            {!isCoach && !isAthlete &&
                <div>
                    <button
                        onClick={() => { setIsCoach(true); setIsAthlete(false)}}
                    >
                        Register as coach
                    </button>
                    <button>
                        Register as athlete
                    </button>
                </div>
            }
            {isCoach &&
                <CoachRegistrationForm />
            }
        </div>
    )
}

export default GetStarted