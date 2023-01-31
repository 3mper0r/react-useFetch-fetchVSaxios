import React from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {

  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")

  if (loading) return <h1>Loading..</h1>
  if (error) console.log(error)

  return (
    <div className='App'>
      <h3>hello</h3>
      <ul>
        {users?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )

}
export default App