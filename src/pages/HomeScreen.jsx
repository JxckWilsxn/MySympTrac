import { useEffect } from "react";
import { toast } from 'react-toastify';

export const HomeScreen = ({ userInput }) => {
    useEffect(() => {
        toast.success(`Account created succesfully!`, {
            toastId: "registration-success",
            duration: 4000,
            position: "top-center",
        })
    }, [userInput]);

    return (
        <div className="login-screen">
            <h1 className="mt-100 text-center text-deep-purple text-4xl">Welcome</h1>
        </div>
    )
}
