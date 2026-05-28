"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "@/types/ticket"

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
        accessorKey: "owner",
        header: "Responsável",
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
        accessorKey: "actions",
        header: "Ações",
    },
]