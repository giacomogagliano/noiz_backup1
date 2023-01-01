import { createBoard } from '@wixc3/react-board';
import { P } from '../../../HTML/React/style/HTMLElements/P';

const res = createBoard({
    name: 'P bold',
    Board: () => <P bold>ciao</P>,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    }
});


export default res