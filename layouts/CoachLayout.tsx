import CoachProvider from "../contexts/CoachContext";
import CoachHeader from "../components/coach/CoachHeader";
import CoachNav from "../components/coach/CoachNav";


const CoachLayout = ({ children }) => {

    return (
        <CoachProvider>
            <CoachHeader />
                {children}
            <footer>
                Test Footer
            </footer>
        </CoachProvider>
    )
}

export default CoachLayout