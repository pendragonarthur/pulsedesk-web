import { Ticket } from "@/types/ticket"

interface DashboardMetricsProps {
    tickets: Ticket[]
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleAlert, Clock3, CheckCircle2, Layers3 } from "lucide-react"

export default function DashboardMetrics({ tickets }: DashboardMetricsProps) {

    const totalTickets = tickets.length
    const openTickets = tickets.filter(ticket => ticket.status === "Aberto")
    const inProgressTickets = tickets.filter(ticket => ticket.status === "EmAndamento")
    const doneTickets = tickets.filter(ticket => ticket.status === "Concluido")
    const urgentTickets = tickets.filter(ticket => ticket.priority === "Urgente")

    return (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total de Tickets
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                        {totalTickets}
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Tickets cadastrados
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Abertos
                    </CardTitle>
                    <CircleAlert className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                        {openTickets.length}
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Aguardando atendimento
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Em Andamento
                    </CardTitle>
                    <Clock3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                        {inProgressTickets.length}
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Em tratamento
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Concluídos
                    </CardTitle>
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                        {doneTickets.length}
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Finalizados
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Urgentes
                    </CardTitle>
                    <Layers3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                    <div className="text-3xl font-bold">
                        {urgentTickets.length}
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Prioridade máxima
                    </p>
                </CardContent>
            </Card>

        </section>
    )
}