import { Button } from "@/components/ui/button"
import { ArrowRight, Loader } from "lucide-react"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { Suspense } from "react"



export const NavbarLanding = async () => {
    const session = await getServerSession()
    return (
        <div className="flex flex-row h-12 w-full items-center justify-between px-6">

            
            <Suspense fallback={
                <Button variant={"default"} size={"sm"}>
                    <Loader className="w-4 h-4 animate-spin" />
                </Button>
            }>
                <Link href={
                    session?.user ? "/dashboard" : "/signin"
                
                }>
                <Button variant={"default"} size={"sm"}>
                    {session?.user ? "Dashboard" : "Login"} <ArrowRight className="w-4 h-4" />
                </Button>
                </Link>
            </Suspense>
        </div>
    )
}