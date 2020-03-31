import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'

interface IProps {
  text: string,
}

const ElementWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 5px;
  border-radius: 10px;
  margin: 5px 0;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
`;

const Element: FunctionComponent<IProps> = ({ text }) => (
  <Draggable>
    <ElementWrapper draggable>
      <span>{text}</span>
    </ElementWrapper>
  </Draggable>
);

export default Element;
