import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@atlaskit/css-reset';

import Column from './Column';
import data from './data';

const App = () => {
  const [tasks, setTasks] = useState(Object.assign({}, data.tasks));
  const [columns, setColumns] = useState(Object.assign({}, data.columns));
  const [columnsOrder, setColumnsOrder] = useState(data.columnOrder.slice());

  return columnsOrder.map(columnId => {
    const column = columns[columnId];
    const tasksInColumn = column.taskIds.map(taskId => tasks[taskId]);
    console.log(tasksInColumn);

    return <Column key={column.id} column={column} tasks={tasksInColumn} />;
  });
};

ReactDOM.render(<App />, document.getElementById('root'));
