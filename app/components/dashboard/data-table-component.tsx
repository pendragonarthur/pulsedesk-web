"use client"

import { getColumns } from "@/app/tickets/columns"
import { DataTable } from "@/app/tickets/data-table"

import { Ticket } from "@/types/ticket"

interface DashboardTableProps {
    tickets: Ticket[]
    onTicketUpdated: () => Promise<void>
    onTicketDeleted: () => Promise<void>
}

export default function DashboardTableComponent({ tickets, onTicketDeleted, onTicketUpdated }: DashboardTableProps) {

    const columns = getColumns({
        onTicketUpdated,
        onTicketDeleted,
    })

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={tickets} />
        </div>
    )
}
