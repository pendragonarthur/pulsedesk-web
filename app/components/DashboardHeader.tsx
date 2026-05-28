"use client"
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export default function DashboardHeader() {

    return (<div>
        <nav className="py-6 flex items-center justify-between">
            <div>
                <h1>PulseDesk</h1>
            </div>
            <div className="flex items-center gap-4 justify-center">
                <Button className="rounded-full p-0 cursor-pointer">
                    <Avatar className="flex items-center justify-center px-2"><User /></Avatar>
                </Button>
            </div>
        </nav>
    </div>)
}