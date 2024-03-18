import React, { useContext, useState } from 'react'
import { ProfileContext } from '../App';

const ChangeProfile = () => {
    const [updatedUser, setUpdatedUser] = useState();
    const { setUsername } = useContext(ProfileContext)
    return (
        <div>
            <input type="text" onChange={(e) => { setUpdatedUser(e.target.value) }} />
            <button onClick={() => { setUsername(updatedUser) }}>Change Username</button>
        </div>
    )
}

export default ChangeProfile