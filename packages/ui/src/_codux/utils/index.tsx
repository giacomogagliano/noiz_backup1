import { createBoard, OmitReactBoard, IReactBoard } from '@wixc3/react-board';
export { }

type createBoardInput = OmitReactBoard<IReactBoard>

export const createNoizBoard = (input: createBoardInput) => {
    const Canvas = () => <div className="canvas"><input.Board /></div>
    input.Board = Canvas
    return createBoard(input)
}

