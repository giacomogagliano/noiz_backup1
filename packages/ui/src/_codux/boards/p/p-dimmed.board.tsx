import { createBoard } from '@wixc3/react-board';
import { P } from '../../../HTML/React/style/HTMLElements/P';


export default createBoard({
    name: 'P dimmed',
    Board: () => ((props?: { name: string }) => <P dimmed>ciao{props ? props.name : null}</P>)(),
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    }
});
