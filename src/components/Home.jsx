import React from 'react'

import { useContext } from 'react'
import { ProfileContext } from '../App'
import { useQuery } from 'react-query'
import Axios from 'axios'

const Home = () => {
    const { username } = useContext(ProfileContext)
    const { data, isLoading, isError, error, refetch } = useQuery(['cat'], () => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data)
    })

    if (isLoading) {
        return <h2>Loading..</h2>
    }
    if (isError) return <h2>{error.message}</h2>
    return (
        <div>Home username is
            <h1>{data?.fact}</h1>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default Home