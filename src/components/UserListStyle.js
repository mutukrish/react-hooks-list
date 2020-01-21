import styled from "styled-components";
import * as palette from "../constants/StyleVariables.js";

export const ListContainer = styled.div`
  width: 340px;
  height: 225px;
  border-radius: 3px;
  background-color: ${palette.LIGHTBG};
  margin: auto;
  margin-top: 50px;
  border: 1px solid ${palette.BORDERCLR};
  box-shadow: 0 0 12px 0 rgba(16, 21, 23, 0.24);
  padding: 7px 0;
  font-size: 12px;
  overflow: hidden;
  color: ${palette.FONTCLR};
`;

export const ListItem = styled.div`
  text-align: left;
  padding: 7px 16px;
  font-size: 12px;
  color: ${palette.LISTFONTCLR};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${palette.LISTHOVERCLR};
    .icon {
      color: ${palette.ICONHOVERCLR};
    }
  }
  .icon {
    font-size: 11px;
  }
`;

export const Name = styled.span`
  margin-left: 10px;
`;

export const Loader = styled.div`
  text-align: center;
`;
