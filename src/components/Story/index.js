import { useEffect, useState } from 'react'
import './style.css'

export function Story() {

    const [userStory, setUserStory] = useState([])

    const [limitUser] = useState(9)

    const slice = userStory.slice(0, limitUser)

    useEffect(() => [
        fetch('https://api.github.com/users/gabrieldiasss/followers')
        .then((response)  => {
            return response.json()
        })
        .then((result) => {
            setUserStory(result)
        })
        .catch((err) => {
            throw new Error(err)
        })

    ], [])


    return(
        <div className='container'>

        {slice.map((userStory, key) => (

            <div className='user-elements' key={key}>
                <div>
                    <img className="image-user-story" src={`https://github.com/${userStory.login}.png`} />
                </div>
                
            </div>

        ))}

        </div>
    )
}