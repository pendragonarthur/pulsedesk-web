"use client"
import { getAllTickets } from "@/services/ticket.service"
import { Ticket } from "@/types/ticket"
import { useState } from "react"



export function useTickets() {

    const [tickets, setTickets] = useState<Ticket[]>([])

    const fetchTickets = async () => {
        try {
            const data = await getAllTickets()
            setTickets(data)
        } catch (error) {
            console.log(error)
        }
    }

    return { tickets, setTickets, fetchTickets }
}