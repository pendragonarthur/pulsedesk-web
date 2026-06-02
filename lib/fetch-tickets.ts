"use client"
import { getAllTickets } from "@/services/ticket.service"
import { Ticket } from "@/types/ticket"
import { useState } from "react"



export default async function fetchTickets() {

    const [tickets, setTickets] = useState<Ticket[]>([])

    try {
        const data = await getAllTickets()
        setTickets(data)
    } catch (error) {
        console.log(error)
        throw new Error(`Não foi possível buscar os tickets.`)
    }
}