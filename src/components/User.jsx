import { useState } from 'react'

const User = ({ user }) => {

    const [ isShown, setIsShown ] = useState(false)

    return (
        <article>
            <img src={user.avatar_url} alt="" />
            <p>{user.login}</p>
            <button onClick={() => setIsShown(!isShown)}>
                { isShown ? " Show less" : "Show more" }
            </button>
            {isShown && (
                <details>
                    <p>Rank: {user.type}</p>
                    <p>Admin: {user.site_admin ? "True" : "False"}</p>
                </details>)}
        </article>
    )
}

export default User