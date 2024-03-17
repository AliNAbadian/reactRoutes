import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {

    let navigate = useNavigate()


    return (
        <>
            <div>About</div>
            <button onClick={() => { navigate("/") }}>Goto HomePage</button>
        </>
    )
}

export default About