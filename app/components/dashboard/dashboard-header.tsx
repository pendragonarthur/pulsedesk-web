"use client"
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuGroup, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { removeToken } from "@/services/auth.service";

export default function DashboardHeader() {

    const router = useRouter()

    const handleLogout = () => {
        removeToken()
        router.push("/")
    }

    return (<div>
        <nav className="py-6 flex items-center justify-between px-4">
            <div>
                <h1>PulseDesk</h1>
            </div>
            <div className="flex items-center justify-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer">
                        <Avatar className="flex items-center justify-center px-2"><User /></Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuGroup>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="cursor-pointer">
                                <Button className="bg-transparent p-0 hover:bg-transparent flex max-h-4 gap-2" onClick={handleLogout}>Sair</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuGroup>
                </DropdownMenu>
                <Button className="rounded-full p-0">
                </Button>
            </div>
        </nav>
    </div>)
}