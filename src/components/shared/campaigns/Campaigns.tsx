'use client'


import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
export default function Campaigns() {


    return (
        <>
            <main>
                <ScrollArea className="h-[49rem] w-[40rem] rounded-md bg-[#2F2F2F]">
                    <div className="p-4">
                        <div className="flex flex-row">
                            <Separator className="mt-2 ml-4 mr-2 w-52 bg-black" />
                            <h4 className="mb-4 text-sm font-medium leading-none text-white">Minhas Campanhas</h4>
                            <Separator className=" mt-2 ml-2 w-52 bg-black" />
                        </div>
                        <div className="mt-60 flex flex-row">
                            <Separator className="mt-2 ml-4 mr-2 w-52 bg-black" />
                            <h4 className="mb-4 text-sm font-medium leading-none text-white">Outras Campanhas</h4>
                            <Separator className=" mt-2 ml-2 w-52 bg-black" />
                        </div>
                    </div>
                </ScrollArea>
            </main>
        </>
    )
}

