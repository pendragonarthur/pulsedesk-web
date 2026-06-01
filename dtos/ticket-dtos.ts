export interface TicketResponse {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    priority: string,
    status: string,
    userId: number
}

export interface TicketRequest {
    title?: string,
    description?: string,
    updatedAt?: string,
    priority?: string,
    status?: string,
} 