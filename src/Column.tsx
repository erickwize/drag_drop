import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd'

import Element from './Element'

interface IProps {
  title: string
};

const BoardColumn = styled.div`
  background-color: rgb(235, 236, 240);
  border-radius: 10px;
  margin: 0 30px;
  padding: 5px 5px 0 5px;
  min-width: 250px;

  h3 {
    margin: 0px;
    padding-left: 5px;
  }
`

const Column: FunctionComponent<IProps> = ({ title }) => (
  <Droppable>
    <BoardColumn>
      <h3>{title}</h3>
      <Element text="Task 1" />
      <Element text="Task 2" />
      <Element text="Task 3" />
    </BoardColumn>
  </Droppable>
);

export default Column;
