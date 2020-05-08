import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import '@atlaskit/css-reset';

import Column from './Column';
import data from './data';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [tasks, setTasks] = useState(Object.assign({}, data.tasks));
  const [columns, setColumns] = useState(Object.assign({}, data.columns));
  const [columnsOrder, setColumnsOrder] = useState(data.columnOrder.slice());

  return (
    <DragDropContext
      onDragEnd={result => {
        const { destination, source, draggableId } = result;
        if (!destination) return;

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        )
          return;

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start === finish) {
          const newTaskIds = Array.from(start.taskIds);
          newTaskIds.splice(source.index, 1);
          newTaskIds.splice(destination.index, 0, draggableId);

          const newColumn = {
            ...start,
            taskIds: newTaskIds,
          };

          setColumns({ ...columns, [newColumn.id]: newColumn });
          return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
          ...start,
          taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          taskIds: finishTaskIds,
        };

        setColumns({
          ...columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        });
      }}
    >
      <Container>
        {columnsOrder.map(columnId => {
          const column = columns[columnId];
          const tasksInColumn = column.taskIds.map(taskId => tasks[taskId]);

          return (
            <Column key={column.id} column={column} tasks={tasksInColumn} />
          );
        })}
      </Container>
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
