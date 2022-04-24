import { styled } from "@compiled/react";
import Button from "./components/Button";

const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export default function App() {
    return (
        <Container>
            <Button>Button</Button>
        </Container>
    );
}
