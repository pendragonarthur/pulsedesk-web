"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { userRegister } from "@/services/auth.service"

export function useSignUp() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const router = useRouter()

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log("Senhas não coincidem")
            return
        }

        try {
            const response = await userRegister({ name, email, password })
            router.push('/')
        } catch (error) {
            console.log("Erro", error)
        }
    }

    return { name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit }

}