import { useStore,actions } from './store';
function App() {
  const [state, dispatch] = useStore()

  const handleAdd = () =>{
    dispatch(actions.addAction(state.todoInput))
    dispatch(actions.setAction(''))
  }

  return (
      <div style={{ padding: 20 }}>
        <input
          value={state.todoInput}
          onChange={(e) => dispatch(actions.setAction(e.target.value))}
          placeholder='Enter your work...'
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {
            state.todos.map((item, index) => (
              <li key={index}> 
                {item}<span onClick={() => dispatch(actions.deleteAction(index))}>&times;</span>
              </li>
            ))
          }
        </ul>
      </div>
  )
}

export default App;
