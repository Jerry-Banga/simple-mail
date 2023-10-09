import styled from "styled-components";
import { colorPalette } from "../utils/colors";

export const MessagePageBigBox = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 10vh auto;


      > p{
        color: ${colorPalette.light};
        width: 200px;
        font-size: 30px;
      }
      > div{
        background-color: ${colorPalette.dark};
        border-radius: 8px;
        padding: 10px;
        height: 300px;
      }
`;