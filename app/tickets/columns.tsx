"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "@/types/ticket"
import { TicketActions } from "../components/dashboard/ticket-actions"

export const columns: ColumnDef<Ticket>[] = [
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
    },
    {
        id: "actions",
        header: "Ações",
        cell: ({ row }) => {
            const ticket = row.original;
            return <TicketActions ticket={ticket} />
        }
    },
]