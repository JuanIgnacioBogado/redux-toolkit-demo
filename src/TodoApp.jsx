import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos, isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

      <pre>{JSON.stringify(todo, null, 2)}</pre>

      {/* <ul>
        {todos?.map(todo => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'Done' : 'Pending'} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      <button onClick={() => setTodoId(id => (id === 1 ? 1 : id - 1))}>
        Prev Todo
      </button>
      <button onClick={() => setTodoId(id => id + 1)}>Next Todo</button>
    </>
  );
};
