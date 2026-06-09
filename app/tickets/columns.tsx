"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "@/types/ticket"
import { TicketActions } from "../components/dashboard/ticket-actions"
import { formatDate } from "@/helpers/format-date"
import { Badge } from "@/components/ui/badge"

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
            cell: ({ row }) => {
                const status = row.getValue("status") as string
                const statusVariants: Record<string, string> = {
                    Aberto: "bg-green-800",
                    EmAndamento: "bg-yellow-800",
                    AguardandoRetorno: "bg-orange-800",
                    Concluido: "bg-blue-800",
                    Cancelado: "bg-gray-800"
                }
                const badgeClass = statusVariants[status] ?? "bg-gray-800"

                return (
                    <Badge className={badgeClass}>{status}</Badge>
                )
            }
        },
        {
            accessorKey: "priority",
            header: "Prioridade",
            cell: ({ row }) => {
                const priority = row.getValue("priority") as string
                const priorityVariants: Record<string, string> = {
                    Baixa: "bg-green-800",
                    Media: "bg-yellow-800",
                    Alta: "bg-orange-800",
                    Urgente: "bg-red-800",
                }
                const badgeClass = priorityVariants[priority] ?? "bg-gray-800"

                return (
                    <Badge className={badgeClass}>{priority}</Badge>
                )
            }
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