import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ChangeProfile from './ChangeProfile'
import { ProfileContext } from '../App'

const Profile = () => {
    const { username } = useContext(ProfileContext)
    const { name } = useParams()

    return (
        <div>Profile of {name} username is {username}
            <ChangeProfile />
        </div>
    )
}

export default Profile