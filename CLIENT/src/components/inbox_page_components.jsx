import styled from "styled-components";
import { colorPalette } from "../utils/colors";

export const MessageTile = styled.div`
        width: 450px;
        height: 80px;
        border-radius: 8px;
        background-color: ${props => props.$isRead ? colorPalette.darkAlt : colorPalette.slightDarkAlt};
        margin: 10px;
        padding: 0px 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        justify-content: center;

       > p:last-child{
            width: 150px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
`;

export const InBoxPageBigBox = styled('div')`
      display: flex;
      flex-direction: column;
      width: 600px;
      margin: auto;

      > p{
        color: ${colorPalette.lightAlt};
        width: 200px;
      }
      > div{
        background-color: ${colorPalette.dark};
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        padding: 10px;
      }
`;

export const PageTitleComponent = styled.p`
        font-size: 35px;
        font-weight: bold;
        margin: 10px;
`;