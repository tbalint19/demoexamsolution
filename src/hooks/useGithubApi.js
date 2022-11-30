import { loadUsers } from '../api/loadUsers.js'
import { useState, useEffect } from 'react'

export const useGithubApi = () => {

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

    return users
}