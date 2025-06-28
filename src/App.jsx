import { useState } from 'react'
import './App.css'
import { useAuth } from './hooks/useAuth'
import { useTodos } from './hooks/useTodos'
import AuthForm from './components/AuthForm'

function App() {
  const { user, loading: authLoading, logout } = useAuth();
  const { todos, loading: todosLoading, addTodo, updateTodo } = useTodos(user?.uid);
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [completed, setCompleted] = useState(false);

  // Show loading spinner while checking authentication
  if (authLoading) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  // Show login form if user is not authenticated
  if (!user) {
    return <AuthForm />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const todoData = {
      name: name,
      description: description,
      date: date,
      completed: completed
    };

    const result = await addTodo(todoData);
    
    if (!result.error) {
      setName("");
      setDescription("");
      setDate("");
      setCompleted(false);
    }
  }

  async function toggleTodoCompletion(todoId, currentStatus) {
    await updateTodo(todoId, { completed: !currentStatus });
  }

  function returnAllTodos(todo, index) {
    return (
      <div className='container' key={todo.id}>
        <div className="todo-header">
          <h3 className='todo-title'>{todo.name}</h3>
          <div className="todo-actions">
            <button 
              className={`status-badge ${todo.completed ? 'completed' : 'pending'}`}
              onClick={() => toggleTodoCompletion(todo.id, todo.completed)}
              title="Click to toggle completion status"
            >
              {todo.completed ? '✅ Completed' : '⏳ Pending'}
            </button>
          </div>
        </div>
        
        {todo.description && (
          <div className="todo-description">
            <p>{todo.description}</p>
          </div>
        )}
        
        <div className="todo-meta">
          <div className="meta-item">
            <span className="meta-label">📅 Due Date</span>
            <span className="meta-value">{new Date(todo.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="todo-checkbox">
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleTodoCompletion(todo.id, todo.completed)}
          />
          <label htmlFor={`todo-${todo.id}`} className="checkbox-label">
            <span className="checkbox-icon">
              {todo.completed ? '✓' : ''}
            </span>
            {!todo.completed && (
              <span className="checkbox-text">
                Mark as completed
              </span>
            )}
          </label>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className="app-header">
        <h1 className="app-title">✨ Todo Manager</h1>
        <div className="user-info">
          <span>👋 {user.email}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder='Task Name'
            required
          />
        </div>
        <div className="input-group">
          <input 
            type="date"
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="input-group description">
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder='Description (optional details about your task...)'
            rows="4"
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <label htmlFor="completed">Mark as completed</label>
        </div>
        <button type='submit'>Add Todo</button>
      </form>
      
      {todosLoading ? (
        <div className="todos-grid">
          <div className="container">
            <p>Loading your todos...</p>
          </div>
        </div>
      ) : (
        <div className="todos-grid">
          {todos.map(returnAllTodos)}
        </div>
      )}
    </>
  )
}

export default App