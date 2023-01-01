import { createBoard } from "@wixc3/react-board";
import { Button } from "../../../HTML/React/style";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../HTML/React/themes";

export default createBoard({
    name: "Button",
    Board: () => (
        <ThemeProvider theme={lightTheme}>
            <Button primary>Click me</Button>
        </ThemeProvider>
    ),
    environmentProps: {
        windowWidth: 300,
        windowHeight: 300,
        windowBackgroundColor: "#ffffff",
    },
});
