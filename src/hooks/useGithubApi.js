import { loadUsers } from '../api/loadUsers.js'
import { useState, useEffect } from 'react'

export const useGithubApi = () => {

    const [ error, setError ] = useState(false)
    const [ loading, setloading ] = useState(false)
    const [ users, setUsers ] = useState(null)

    const init = async () => {
        setloading(true)
        try {
            const data = await loadUsers()
            setUsers(data)
            setError(false)
        } catch (error) {
            setError(true)
        } finally {
            setloading(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            init()
        }, 1000)
    }, [])

    return { users, loading, error }
}