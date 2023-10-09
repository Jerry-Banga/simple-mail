import styled from 'styled-components'
import {colorPalette} from '../utils/colors'

export const HomePageBigBox = styled.div`
    width: 600px;
    height: 450px;
    margin: 4% auto;
    background-color: ${colorPalette.lightAlt};
    box-shadow: 4px 3px 10px rgba(233, 230, 230, 0.2);
    border-radius: 10px;
    display: grid;
    place-items: center;

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 8px;
       p:first-child{
        font-size: 80px;
        color: ${colorPalette.darkAlt};
        font-weight: bold;
       }
       p {
        font-size: 60px;
        color: ${colorPalette.light};
        font-weight: bold;
       }
    }

    div{
        font-size: 18px;
        color: ${colorPalette.light};
    }
`;


export const ViewMessagesButton = styled.button`
        width: 250px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: ${colorPalette.lightGreen};
`;

export const AppNameComponent = styled.p`
        margin: 10px;
        font-size: 30px;
        border-radius: 8px;
        font-weight: bold;
        color: ${colorPalette.light};
        font-family: Arial, Helvetica, sans-serif;
`;