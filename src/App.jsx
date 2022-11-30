import User from './components/User'
import { useGithubApi } from './hooks/useGithubApi'
import { loadUsers } from './api/loadUsers.js'
import { useState, useEffect, useMemo } from 'react'
import './App.css'

const App = () => {

  // const users = useGithubApi()
  const [ users, setUsers ] = useState(null)

  const init = async () => {
      const data = await loadUsers()
      setUsers(data)
  }

  useEffect(() => {
      setTimeout(() => {
          init()
      }, 1000)
  }, [])
  // ---
  
  const [ search, setSearch ] = useState("")

  const filteredUsers = users ? users
    .filter(user => user.login.startsWith(search)) : []
  /*
  const filteredUsers = useMemo(() => users ? users
    .filter(user => user.login.startsWith(search)) : [], [users, search])
  */
  
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
