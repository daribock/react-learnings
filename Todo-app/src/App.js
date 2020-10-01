import React, { useCallback, useState } from 'react';
// import './App.css';

const App = () => {
  const [newTodo, setTodo] = useState('DB');
  const onNewTodoChange = useCallback((event) => {
    console.log(event.target.value)
    setTodo(event.target.value)
  })
  return (
    <div>
      <main>
        <section>
          <form>
            <label htmlfor="newTodo">Enter a Todo:</label>
            <input
              id="newTodo"
              name="newTodo"
              value={newTodo}
              onChange={onNewTodoChange}>
            </input>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
