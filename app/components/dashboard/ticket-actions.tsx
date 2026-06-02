"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { EditTicketModal } from "./edit-ticket-modal"

import { Ticket } from "@/types/ticket"

import { MoreHorizontal } from "lucide-react"
import { DeleteTicketModal } from "./delete-ticket-modal"

interface TicketActionsProps {
    ticket: Ticket
    onTicketUpdated: () => Promise<void>
    onTicketDeleted: () => Promise<void>
}

export function TicketActions({ ticket, onTicketDeleted, onTicketUpdated }: TicketActionsProps) {

    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" ><MoreHorizontal /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setIsEditModalOpen(true)}>Editar</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsDeleteModalOpen(true)}>Deletar</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            <EditTicketModal open={isEditModalOpen} onOpenChange={setIsEditModalOpen} ticket={ticket} onTicketUpdated={onTicketUpdated} />
            <DeleteTicketModal open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen} ticket={ticket} onTicketDeleted={onTicketDeleted} />
        </DropdownMenu>
    )
}