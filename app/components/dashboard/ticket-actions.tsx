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
}

export function TicketActions({ ticket }: TicketActionsProps) {

    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer"><MoreHorizontal /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setIsEditModalOpen(true)}>Editar</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => setIsDeleteModalOpen(true)}>Deletar</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            <EditTicketModal open={isEditModalOpen} onOpenChange={setIsEditModalOpen} ticket={ticket} />
            <DeleteTicketModal open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen} ticket={ticket} />
        </DropdownMenu>
    )
}