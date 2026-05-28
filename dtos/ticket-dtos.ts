export interface TicketResponse {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    status: string,
    userId: number
}

export interface TicketRequest {
    title: string,
    description?: string,
} 