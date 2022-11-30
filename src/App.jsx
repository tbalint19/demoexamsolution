import User from './components/User'
import { useGithubApi } from './hooks/useGithubApi'
import { useInput } from './hooks/useInput'
import { useMemo } from 'react'
import './App.css'

const App = () => {

  const search = useInput("Search")
  const { users, loading, error } = useGithubApi()
  
  const filteredUsers = useMemo(() => users ? users
    .filter(user => user.login.startsWith(search.value)) : [], [users, search.value])
  
  return (
    <>
      <nav>
        <input {...search}/>
      </nav>
      <main>
        {
          loading ?
            <section>Loading...</section> :
          error ?
            <section>Could not load users, try reloading the page</section> :
          !filteredUsers.length ?
            <p>Nothing found</p> :
          <section>
            {filteredUsers.map(user => (
                <User key={user.id} user={user} />
            ))}
          </section>
        }
      </main>
    </>
  )
}

export default App
