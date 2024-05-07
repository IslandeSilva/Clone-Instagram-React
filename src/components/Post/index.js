import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'

import './style.css'
import { IconContext } from 'react-icons'

export function Post() {
    return (
        <>
            <header>
                <div className="infos-post">
                <img src='https://scontent.fbfh23-1.fna.fbcdn.net/v/t39.30808-1/425713634_6938511906246131_4068362818190804810_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHbJFND7Ngu3Y165d5zqECPUBqZZKBUR4xQGplkoFRHjLFlXFHJFGw3ChB7KykBHxqqCOT3tbJVnIlZmgmUjL2K&_nc_ohc=YgD9CPpdzdQQ7kNvgHdClA_&_nc_ht=scontent.fbfh23-1.fna&oh=00_AfC91X-nRvjvE15Lxhgd51k7Hq931_vm8prM5CqF1TS61A&oe=663F30BA'/>
                <p>islandefs</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                <img src="https://media.licdn.com/dms/image/D5612AQFSPUPv4Gcv_A/article-cover_image-shrink_720_1280/0/1690548047583?e=2147483647&v=beta&t=Mx7u9dxwvUM_PjIzw0GfD9Tkzl4yC2Xoh6xZdO3SRXM"/>
            </div>

            <div className="footer-post">

                <IconContext.Provider value={{size: "20px"}}>
                <section className='engagements-posts'>
                   <div className='icons-1'>
                        <div className='icon'><IoMdHeartEmpty /></div>
                        <div className='icon'><BsChat /></div>
                        <div className='icon'><FiSend /></div>
                           
                    </div>
                    
                    <div className='icon'><BsBookmark /></div>

                </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>61 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>islandefs</strong> Desenvolvimento com React-JS
                    </p>
                </div>

                <div className='time-post'>
                    <time>há 1 hora</time>
                </div>

                <div className='comments'>
                    <div className='fake-comments'>
                    <IconContext.Provider value={{size:'20px'}}>
                        <div className='icon'>
                        <BsEmojiSmile />
                        </div>
                    </IconContext.Provider>
                    <input placeholder='Adicione um comentário...'/>

                    </div>
                    <button>Publicar</button>
                </div>

            </div>
        </>
    )
}