let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// export const setVisiblityFilter = (filter) => ({
//   type: 'SET_VISIBLITY_FILTER',
//   filter
// })
