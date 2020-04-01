import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = ({ task }) => <Container>{task.content}</Container>;

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
