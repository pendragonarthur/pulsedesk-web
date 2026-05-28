import { post } from "./api";
import { LoginResponse, LoginRequest } from "@/dtos/login-dtos";
import { RegisterRequest, RegisterResponse } from "@/dtos/register-dtos";

export const userLogin = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await post<LoginResponse>("/auth/login", data)
    saveToken(response.token)
    return response
}

export const userRegister = async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await post<RegisterResponse>('/auth/register', data)
    return response
}

export const saveToken = (token: string) => {
    localStorage.setItem("token", token)
}

export const getToken = (): string | null => {
    return localStorage.getItem("token")
}

export const removeToken = () => {
    localStorage.removeItem("token")
}