"use client"

import { useTickets } from "@/lib/fetch-tickets"

import DashboardHeader from "../components/dashboard/dashboard-header"
import DashboardTableComponent from "../components/dashboard/data-table-component"

import { useEffect, useState } from "react"
import DashboardMetrics from "../components/dashboard/dashboard-metrics"
import DashboardSearchbar from "../components/dashboard/dashboard-searchbar"
export default function Dashboard() {

    const { tickets, setTickets, fetchTickets } = useTickets()

    const [search, setSearch] = useState<string>("")
    const [statusFilter, setStatusFilter] = useState<string>("")
    const [priorityFilter, setPriorityFilter] = useState<string>("")

    useEffect(() => {
        fetchTickets()
    }, [])

    const filteredTickets = tickets.filter((ticket) => {
        const matchesSearch = ticket.title.toLowerCase().includes(search.toLowerCase())

        const matchesStatus = statusFilter === "all" || ticket.status === statusFilter

        const matchesPriority = priorityFilter === "all" || ticket.priority === priorityFilter

        return matchesSearch || matchesPriority || matchesStatus
    }).sort((a, b) => {
        let aScore = 0
        let bScore = 0
        if (statusFilter !== "" && a.status === statusFilter) aScore++
        if (statusFilter !== "" && b.status === statusFilter) bScore++

        if (priorityFilter !== "" && a.priority === priorityFilter) aScore++
        if (priorityFilter !== "" && b.priority === priorityFilter) bScore++

        return bScore - aScore
    })

    const onClearFilters = () => {
        setSearch("")
        setStatusFilter("")
        setPriorityFilter("")
    }

    return (
        <div className="mx-auto container w-full min-h-screen">
            <div>
                <DashboardHeader />
                <div className="border-1 flex flex-col gap-6 rounded-md pt-6 px-4 h-full min-h-[800px]">
                    <DashboardMetrics tickets={tickets} />
                    <DashboardSearchbar onTicketCreated={fetchTickets} search={search} statusFilter={statusFilter} priorityFilter={priorityFilter} onSearchChange={setSearch} onStatusChange={setStatusFilter} onPriorityChange={setPriorityFilter} onClearFilters={onClearFilters} />
                    <DashboardTableComponent tickets={filteredTickets} onTicketDeleted={fetchTickets} onTicketUpdated={fetchTickets} />
                </div>
            </div>
        </div>
    )
}