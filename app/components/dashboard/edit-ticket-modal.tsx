"use client"

import { useEffect, useState } from "react"

import { updateTicket } from "@/services/ticket.service"

import { Button } from "@/components/ui/button"
import { DialogContent, Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Ticket } from "@/types/ticket"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"


interface EditTicketModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    ticket: Ticket
}

const priorityOptions = [
    "Baixa",
    "Media",
    "Alta",
    "Urgente"
]

const statusOptions = [
    "Aberto",
    "EmAndamento",
    "AguardandoRetorno",
    "Concluido",
    "Cancelado"
]



export function EditTicketModal({ open, onOpenChange, ticket }: EditTicketModalProps) {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [priority, setPriority] = useState<string>("")
    const [status, setStatus] = useState<string>("")


    useEffect(() => {
        if (!ticket) return

        setTitle(ticket.title)
        setDescription(ticket.description)
        setStatus(ticket.status)
        setPriority(ticket.priority)
    }, [ticket])

    const handleUpdateTicket = async (e: React.SubmitEvent) => {
        e.preventDefault();
        try {
            const response = await updateTicket(ticket.id, { title: title, description: description, priority: priority, status: status })
            setTitle(response.title)
            setDescription(response.description)
            setPriority(response.priority)
            setStatus(response.status)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg ">
                <form onSubmit={handleUpdateTicket} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Edite seu ticket</DialogTitle>
                        <DialogDescription>
                            Descreva seu problema ou solicitação.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="title">Titulo</Label>
                            <Input name="title" placeholder="Problema de acesso VPN" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Field>
                        <Field>
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea placeholder="Descreva detalhadamente o problema..." value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-2">
                        <Field>
                            <Label htmlFor="priority">Prioridade</Label>
                            <Select value={priority}
                                onValueChange={setPriority}>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Selecione o status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {priorityOptions.map((i) => (
                                            <SelectItem value={i} key={i}>{i}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field>
                            <Label htmlFor="status">Status</Label>
                            <Select value={status}
                                onValueChange={setStatus}>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Selecione o status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {statusOptions.map((i) => (
                                            <SelectItem value={i} key={i}>{i}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" className="cursor-pointer">Salvar edições</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}