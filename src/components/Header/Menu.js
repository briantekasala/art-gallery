import React from "react"
import {Link} from "gatsby"
import {MenuList} from "./headerStyles/headerStyles"

export const Menu = ({menuItems}) => {
 
    return <MenuList>
    {menuItems.map(({node:item},i) => (
        <li key={i}>
            <Link activeClassName="nav-active" to={item.path}>
                {item.label}
            </Link>
        </li>
    ))}

    </MenuList>
}