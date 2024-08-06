"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "../liveblocks.config";

export const Room = ({
    children,
    roomId,
    fallback
}) => {
    return(
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}