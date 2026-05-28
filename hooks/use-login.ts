"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { saveToken, userLogin } from "@/services/auth.service";

export function useLogin() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        try {
            const response = await userLogin({ email, password })
            saveToken(response.token)
            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }

    }

    return { email, setEmail, password, setPassword, handleSubmit }
}