import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState} from "react";
import {TypeUser} from "@/interfaces/user.interface";
import {TypeComponentAuthFields} from "@/interfaces/page.interface";
import {NotFound} from "next/dist/client/components/error";


type TypeContext = {
    user: TypeUser
    setUser: Dispatch<SetStateAction<TypeUser>>
}

export const AuthContext = createContext<TypeContext>({
    user: null,
    setUser: () => {
    }
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({children, Component: {isOnlyUser}}) => {
    const [user, setUser] = useState<TypeUser>(null)

    if (isOnlyUser && !user) {
        return <NotFound/>
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider