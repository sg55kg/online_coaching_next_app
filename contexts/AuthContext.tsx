import {createContext, useContext, useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {redirect} from "next/dist/server/api-utils";
import {useRouter} from "next/router";
import {UserData} from "../types";



const AuthContext = createContext(null!)

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const session = useSession()
    const router = useRouter()
    const [user, setUser] = useState(null)

    const updateUserData = async (updatedUser: UserData) => {
        const userRes = await fetch(`/api/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ user: updatedUser})
        })

        const userJson = await userRes.json()
        setUser(userJson)
    }

    useEffect(() => {
        const fetchUser = async (email: string) => {
            const res = await fetch(`/api/users/${email}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET',
            })
            const user = await res.json()
            setUser(user)
            if(user && user.userType === 'UNASSIGNED' && router.pathname !== '/getstarted') {
                router.push('/getstarted')
            }
            if(user && user.userType === 'COACH' && router.pathname === '/') {
                router.push('/coach/dashboard')
            }
        }

        if(session.status === 'authenticated') {
            fetchUser(session.data.user.email)
        }
    },[session])



    const value = {
        user,
        updateUserData
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider