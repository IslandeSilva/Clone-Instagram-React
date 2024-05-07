import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {

    const [suggestion, setSuggestion] = useState([])

    const [limitUser] = useState(5)

    const slice = suggestion.slice(0, limitUser)

    useEffect(() => [
        fetch('https://api.github.com/users/gabrieldiasss/followers')
        .then((response)  => {
            return response.json()
        })
        .then((result) => {
            setSuggestion(result)
        })
        .catch((err) => {
            throw new Error(err)
        })

    ], [])

    return (
        <div className='container-suggestion'>
            <div className="header-suggestion">
                <img src="https://scontent.fbfh23-1.fna.fbcdn.net/v/t39.30808-1/425713634_6938511906246131_4068362818190804810_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHbJFND7Ngu3Y165d5zqECPUBqZZKBUR4xQGplkoFRHjLFlXFHJFGw3ChB7KykBHxqqCOT3tbJVnIlZmgmUjL2K&_nc_ohc=YgD9CPpdzdQQ7kNvgHdClA_&_nc_ht=scontent.fbfh23-1.fna&oh=00_AfC91X-nRvjvE15Lxhgd51k7Hq931_vm8prM5CqF1TS61A&oe=663F30BA" />
            
                <div className="user-infos-suggestion">
                    <div className="infos">
                        <span>@islandefs</span>
                        <p>Islande Silva</p>
                    </div>

                    <button className='switch'>Mudar</button>
                </div>
            </div>

            <div className='header-main-suggestion'>
                <p>Sugestões para você</p>
                <span>ver tudo</span>
            </div>


            <div className='user-suggestion'>
                {slice.map((suggestion, key) => (
                    <div className='info-suggestion' key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />
                        
                        <div className='info-suggestion-data'>
                            <span>{suggestion.login}</span>
                            <p>Seguido por islandefs</p>
                        </div>

                        <button className='follow'>Seguir</button>
                    </div>
                ))}
            </div>

            

          

            <footer className='footer-suggestion'>
                <p> Sobre &bull; Ajuda &bull; API &bull; Privacidade &bull;</p>
            </footer>

        </div>
    )
}