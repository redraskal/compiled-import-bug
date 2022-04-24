import { styled } from "@compiled/react";

export const Button = styled.button`
    padding: 1em 2em 1em 2em;
    border: none;
    border-radius: 0.3em;
    background: var(--button-default);
    font-weight: 500;

    :hover {
        background: var(--button-default-hover);
    }

    :active {
        border: var(--text) solid 1px;
    }
`;

export default Button;
