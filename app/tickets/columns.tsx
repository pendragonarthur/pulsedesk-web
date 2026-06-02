"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "@/types/ticket"
import { TicketActions } from "../components/dashboard/ticket-actions"
import { formatDate } from "@/helpers/format-date"

interface ColumnsProps {
    onTicketUpdated: () => Promise<void>
    onTicketDeleted: () => Promise<void>
}

export function getColumns({ onTicketUpdated, onTicketDeleted }: ColumnsProps): ColumnDef<Ticket>[] {

    return [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "title",
            header: "Título",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            accessorKey: "priority",
            header: "Prioridade",
        },
        {
            accessorKey: "updatedAt",
            header: "Atualizado em",
            cell: ({ row }) => {
                const value = row.getValue("updatedAt") as string
                return formatDate(value)
            }
        },
        {
            id: "actions",
            header: "Ações",
            cell: ({ row }) => {

                const ticket: Ticket = row.original;
                return <TicketActions ticket={ticket} onTicketUpdated={onTicketUpdated} onTicketDeleted={onTicketDeleted} />
            }
        },
    ]
}