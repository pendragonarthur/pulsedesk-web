import { Ticket } from "@/types/ticket"

interface DashboardMetricsProps {
    tickets: Ticket[]
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleAlert, Clock3, CheckCircle2, Layers3, Tag } from "lucide-react"

export default function DashboardMetrics({ tickets }: DashboardMetricsProps) {

    const totalTickets = tickets.length
    const openTickets = tickets.filter(ticket => ticket.status === "Aberto").length
    const inProgressTickets = tickets.filter(ticket => ticket.status === "EmAndamento").length
    const doneTickets = tickets.filter(ticket => ticket.status === "Concluido").length
    const urgentTickets = tickets.filter(ticket => ticket.priority === "Urgente").length

    const ticketCard = [
        {
            id: 1,
            title: "Total de tickets",
            value: totalTickets,
            icon: <Tag />,
            color: "text-gray-800"
        },
        {
            id: 2,
            title: "Abertos",
            value: openTickets,
            icon: <Layers3 />,
            color: "text-green-800"
        },
        {
            id: 3,
            title: "Em andamento",
            value: inProgressTickets,
            icon: <Clock3 />,
            color: "text-yellow-800"
        },
        {
            id: 4,
            title: "Concluídos",
            value: doneTickets,
            icon: <CheckCircle2 />,
            color: "text-blue-800"
        },
        {
            id: 5,
            title: "Urgentes",
            value: urgentTickets,
            icon: <CircleAlert />,
            color: "text-red-800"
        },
    ]

    return (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {
                ticketCard.map((card) => {
                    return (
                        <Card key={card.id}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className={`text-sm font-medium`}>
                                    {card.title}
                                </CardTitle>
                                <span className={` ${card.color}`}>{card.icon}</span>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">
                                    {card.value}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </section>
    )
}