import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './style.css'

export function Header() {

    return (
        <header className="header" >

            <div className="container" >

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    
                    <input placeholder="pesquisar" />
                </div>

                <div className="menu-icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>

                        
                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>
                        

                    </IconContext.Provider>
                    <img className="img-user" src="https://scontent.fbfh23-1.fna.fbcdn.net/v/t39.30808-1/425713634_6938511906246131_4068362818190804810_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHbJFND7Ngu3Y165d5zqECPUBqZZKBUR4xQGplkoFRHjLFlXFHJFGw3ChB7KykBHxqqCOT3tbJVnIlZmgmUjL2K&_nc_ohc=YgD9CPpdzdQQ7kNvgHdClA_&_nc_ht=scontent.fbfh23-1.fna&oh=00_AfC91X-nRvjvE15Lxhgd51k7Hq931_vm8prM5CqF1TS61A&oe=663F30BA" />
                </div>

            </div>

        </header>
    )

}