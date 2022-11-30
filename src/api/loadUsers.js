export const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users")
    const data = response.json()
    return data
}