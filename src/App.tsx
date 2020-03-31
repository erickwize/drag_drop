import React, { Fragment, DragEvent } from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column'

import './resetCss.scss';

const Wrapper = styled.div`
  background-color: green;
  width: 100vw;
  height: 100vh;
  padding: 20px;

  h1 {
    margin: 0px;
  }

  .board {
    display: flex;
    height: calc(100% - 37px);
  }
`;

const App: React.FunctionComponent = () => (
  <Wrapper>
    <h1>Today's Board</h1>
    <div className="board">
      <DragDropContext>
        <Column title="To Do" />
        <Column title="In progress" />
        <Column title="Done" />
      </DragDropContext>
    </div>
  </Wrapper>
)

ReactDOM.render(<App />, document.getElementById("root"));