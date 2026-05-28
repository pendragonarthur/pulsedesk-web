import { columns } from "./columns"
import { DataTable } from "./data-table"

import { Ticket } from "@/types/ticket"

interface DashboardTableProps {
    tickets: Ticket[]
}

export default function DashboardTable({ tickets }: DashboardTableProps) {

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={tickets} />
        </div>
    )
}