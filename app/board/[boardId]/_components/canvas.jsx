import React, { useState } from 'react';
import { Info } from './info';
import { Participants } from './participants';
import { Toolbar } from './toolbar';
import { useSelf, useHistory, useCanRedo, useCanUndo } from '../../../../liveblocks.config';
import { CanvasMode, CanvasState } from '../../../../types/canvas';

export const Canvas = ({ boardId }) => {
    const info = useSelf((me) => me.info);

    // Initialize canvasState with mode set to CanvasMode.None
    const [canvasState, setCanvasState] = useState({
        mode: CanvasMode.None
    });

    const history = useHistory();
    const canRedo = useCanRedo();
    const canUndo = useCanUndo();

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                redo={history.redo}
                undo={history.undo}
            />
        </main>
    );
};
