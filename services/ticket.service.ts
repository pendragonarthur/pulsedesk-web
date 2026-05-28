import { get, post, del, put } from './api'
import { TicketRequest, TicketResponse } from '@/dtos/ticket-dtos'

export const getMyTickets = async (): Promise<TicketResponse[]> => {
    const response = await get<TicketResponse[]>('/tickets/my-tickets')
    return response
}

export const getTicketById = async (id: number): Promise<TicketResponse> => {
    const response = await get<TicketResponse>(`/tickets/${id}`)
    return response
}

export const getAllTickets = async (): Promise<TicketResponse[]> => {
    const response = await get<TicketResponse[]>('/tickets')
    return response
}

export const createTicket = async (data: TicketRequest): Promise<TicketResponse> => {
    const response = await post<TicketResponse>('/tickets/create-ticket', data)
    return response
}

export const deleteTicket = async (id: number): Promise<TicketResponse> => {
    const response = await del<TicketResponse>(`/tickets/${id}`)
    return response
}

export const updateTicket = async (id: number, data: TicketRequest): Promise<TicketResponse> => {
    const response = await put<TicketResponse>(`/tickets/${id}`, data)
    return response
}