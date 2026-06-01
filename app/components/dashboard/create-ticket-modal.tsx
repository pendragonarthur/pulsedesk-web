"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createTicket } from "@/services/ticket.service"
import { useState } from "react"

interface CreateTicketModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onTicketCreated: () => void

}

export function CreateTicketModal({ open, onOpenChange, onTicketCreated }: CreateTicketModalProps) {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleCreateTicket = async (e: React.SubmitEvent) => {
        e.preventDefault()
        try {
            await createTicket({ title: title, description: description })
            if (!title || !description) {
                return
            }
            onTicketCreated()
            onOpenChange(false)
            setTitle("")
            setDescription("")
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg ">
                <form onSubmit={handleCreateTicket} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle>Crie seu ticket</DialogTitle>
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
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Criar ticket</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
