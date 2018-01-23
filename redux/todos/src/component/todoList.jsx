import React from 'react'
import Todo from './todo.jsx'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoList
