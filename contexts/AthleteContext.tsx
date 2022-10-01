import {createContext, useContext} from "react";


const AthleteContext = createContext(null!)

export const useAthleteContext = () => {
    return useContext(AthleteContext)
}

const AthleteProvider = ({ children }) => {

    return (
        <AthleteContext.Provider value={{}}>
            {children}
        </AthleteContext.Provider>
    )
}

export default AthleteProvider