"use client"

import { Button } from "@/components/ui/button"


import DashboardHeader from "../components/dashboard/dashboard-header"
import DashboardTable from "../tickets/page"

import { useEffect, useState } from "react"
import { CreateTicketModal } from "../components/dashboard/create-ticket-modal"
import { Ticket } from "@/types/ticket"
import { getAllTickets } from "@/services/ticket.service"
import DashboardMetrics from "../components/dashboard/dashboard-metrics"
import DashboardSearchbar from "../components/dashboard/dashboard-searchbar"
export default function Dashboard() {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const [tickets, setTickets] = useState<Ticket[]>([])

    const fetchTickets = async () => {
        try {
            const data = await getAllTickets()
            setTickets(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTickets()
    }, [])

    return (
        <div className="mx-auto container w-full min-h-screen">
            <div>
                <DashboardHeader />
                <div className="border-1 flex flex-col gap-6 rounded-md pt-6 px-4 h-full min-h-[800px]">
                    <DashboardMetrics tickets={tickets} />
                    <DashboardSearchbar />
                    <DashboardTable tickets={tickets} onTicketDeleted={fetchTickets} onTicketUpdated={fetchTickets} />
                </div>
            </div>
        </div>
    )
}