"use client"

import { useTickets } from "@/lib/fetch-tickets"
import { useEffect, useState } from "react"
import DashboardTableComponent from "../components/dashboard/data-table-component"

export default function TicketsPage() {
    const { tickets, fetchTickets } = useTickets()

    useEffect(() => {
        fetchTickets()
    }, [])

    return (
        <div className="mx-auto container w-full min-h-screen py-6">
            <h1 className="text-3xl font-bold mb-6">Todos os Tickets</h1>
            <DashboardTableComponent tickets={tickets} onTicketDeleted={fetchTickets} onTicketUpdated={fetchTickets} />
        </div>
    )
}