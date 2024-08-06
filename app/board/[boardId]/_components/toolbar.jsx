import React from 'react'; // Make sure to import React if not already done
import {
    Bot,
    Circle,
    MousePointer2,
    Pencil,
    Redo2,
    Square,
    StickyNote,
    Type,
    Undo2
} from "lucide-react";
import { Skeleton } from "../../../../components/UI/skeleton";
import { ToolButton } from "../_components/tool-button";
import { CanvasState } from "../../../../types/canvas"; // Assuming CanvasState is defined here

export const Toolbar = ({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo,
}) => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Text"
                    icon={Type}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Sticky note"
                    icon={StickyNote}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Rectangle"
                    icon={Square}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Ellipse"
                    icon={Circle}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Pen"
                    icon={Pencil}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Writing Detection"
                    icon={Bot}
                    onClick={() => { }}
                    isActive={false}
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton
                    label="Undo"
                    icon={Undo2}
                    onClick={undo}
                    isDisabled={!canUndo}
                />
                <ToolButton
                    label="Redo"
                    icon={Redo2}
                    onClick={redo}
                    isDisabled={!canRedo}
                />
            </div>
        </div>
    );
};

export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] rounded-md shadow-md">
            <Skeleton className="h-full w-full bg-muted-400" />
        </div>
    )
};
