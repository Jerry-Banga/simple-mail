import styled from "styled-components";

export const Spinner = styled.div`
            width: 40px;
            height: 40px;
            margin: 100px auto;
            border-radius: 50%;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top-color: #3498db;
            animation: spin 1s infinite linear;

            @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
`;