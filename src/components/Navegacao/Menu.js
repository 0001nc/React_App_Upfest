import React from "react";
import './Menu.scss'
import {Link, NavLink} from 'react-router-dom'
import iconLink1 from '../../assets/icons/home.svg'
import iconLink2 from '../../assets/icons/search.svg'
import iconLink3 from '../../assets/icons/ticket.svg'
import iconLink4 from '../../assets/icons/user.svg'


function Menu(){

    return(
        <div>
            <div className="menu-index">

                <div className="link1">
                    <NavLink to={"/home"} >
                        <img src={iconLink1} alt=""/>
                    </NavLink>
                </div>

                <div className="link2">
                    <NavLink to={"/search"} >
                        <img src={iconLink2} alt=""/>
                    </NavLink>

                </div>

                <div className="link3">
                    <NavLink to={"/bilhetes"} >
                        <img src={iconLink3} alt=""/>
                    </NavLink>
                </div>

                <div className="link4" >
                    <NavLink to={"/pessoal"}>
                        <img src={iconLink4} alt=""/>
                    </NavLink>
                </div>

            </div>
            <div className="menu-background"></div>

        </div>

    );
}

export default Menu;