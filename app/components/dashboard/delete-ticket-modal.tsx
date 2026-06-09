"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Dialog } from "@/components/ui/dialog"
import { FieldGroup, Field } from "@/components/ui/field"
import { Ticket } from "@/types/ticket"
import { deleteTicket } from "@/services/ticket.service"

interface CreateTicketModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    ticket: Ticket
    onTicketDeleted: () => Promise<void>

}

export function DeleteTicketModal({ open, onOpenChange, ticket, onTicketDeleted }: CreateTicketModalProps) {

    const handleDeleteTicket = async (e: React.SubmitEvent) => {
        e.preventDefault()
        if (!ticket.id) {
            throw new Error(`ID do ticket não encontrado`)
        }
        try {
            await deleteTicket(ticket.id)
            await onTicketDeleted()
            onOpenChange(false)
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
                        <Button type="submit" >Deletar ticket</Button>
                    </FieldGroup>
                </form>
            </DialogContent>
        </Dialog>
    )
}