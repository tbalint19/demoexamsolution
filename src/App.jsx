import User from './components/User'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  
  const [ search, setSearch ] = useState("")
  const [ users, setUsers ] = useState(null)

  const init = async () => {
    const response = await fetch("https://api.github.com/users")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    init()
  }, [])
  
  const filteredUsers = users ? users
    .filter(user => user.login.startsWith(search)) : []
  
  return (
    <>
      <nav>
        <input
          type="text"
          placeholder='Search'
          value={search}
          onChange={e => setSearch(e.target.value)} />
      </nav>
      <main>
        {!users && <section>Loading...</section>}
        {users && (
          <section>
            {filteredUsers.length ? filteredUsers
              .map(user => (
                <User key={user.id} user={user} />
              )) : <p>Nothing found</p> }
          </section>
        )}
      </main>
    </>
  )
}

export default App
