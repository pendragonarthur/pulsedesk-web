"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Dialog } from "@/components/ui/dialog"
import { FieldGroup, Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Ticket } from "@/types/ticket"
import { deleteTicket } from "@/services/ticket.service"

interface CreateTicketModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    ticket: Ticket
}

export function DeleteTicketModal({ open, onOpenChange, ticket }: CreateTicketModalProps) {

    const handleDeleteTicket = async (e: React.SubmitEvent) => {
        e.preventDefault()
        if (!ticket.id) {
            throw new Error(`ID do ticket não encontrado`)
        }
        try {
            await deleteTicket(ticket.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg ">
                <form onSubmit={handleDeleteTicket} className="space-y-4">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl">Tem certeza que quer deletar o ticket?</DialogTitle>
                    </DialogHeader>
                    <FieldGroup className="flex gap-2 ">
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" className="cursor-pointer">Deletar ticket</Button>
                    </FieldGroup>
                </form>
            </DialogContent>
        </Dialog>
    )
}