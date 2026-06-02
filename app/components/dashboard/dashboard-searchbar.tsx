"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreateTicketModal } from "./create-ticket-modal"
import fetchTickets from "@/lib/fetch-tickets"


const statusOptions = [
    "Aberto",
    "EmAndamento",
    "AguardandoRetorno",
    "Concluido",
    "Cancelado"
]

const priorityOptions = [
    "Baixa",
    "Media",
    "Alta",
    "Urgente"
]

export default function DashboardSearchbar() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

    return (
        <Field orientation="horizontal" className="flex h-full items-center">
            <Button onClick={() => setIsCreateModalOpen(true)}>Criar Ticket</Button >
            <Input type="search" placeholder="Buscar ticket" />
            <Button>Buscar</Button>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {statusOptions.map((i) => (
                            <SelectItem value={i} key={i}>{i}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {priorityOptions.map((i) => (
                            <SelectItem value={i} key={i}>{i}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <CreateTicketModal open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen} onTicketCreated={fetchTickets} />
        </Field >
    )
}