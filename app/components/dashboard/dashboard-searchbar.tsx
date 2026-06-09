"use client"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreateTicketModal } from "./create-ticket-modal"


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

interface DashboardSearchbarProps {
    onTicketCreated: () => Promise<void>
    search: string
    statusFilter: string
    priorityFilter: string
    onSearchChange: (search: string) => void
    onStatusChange: (status: string) => void
    onPriorityChange: (priority: string) => void
    onClearFilters: () => void
}

export default function DashboardSearchbar({ onTicketCreated, search, statusFilter, priorityFilter, onSearchChange, onStatusChange, onPriorityChange, onClearFilters }: DashboardSearchbarProps) {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

    return (
        <Field orientation="horizontal" className="flex h-full items-center">
            <Button onClick={() => setIsCreateModalOpen(true)}>Criar Ticket</Button >
            <Input type="search" placeholder="Buscar ticket" value={search} onChange={(e) => onSearchChange(e.target.value)} />
            <Button>Buscar</Button>
            <Select value={statusFilter} onValueChange={onStatusChange}>
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
            <Select value={priorityFilter} onValueChange={onPriorityChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup >
                        {priorityOptions.map((i) => (
                            <SelectItem value={i} key={i}>{i}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button onClick={onClearFilters}>Limpar Filtros</Button>
            <CreateTicketModal open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen} onTicketCreated={onTicketCreated} />
        </Field >
    )
}