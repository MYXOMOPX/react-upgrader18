import React from 'react';
import './Sidebar.css';
import {NavLink} from "react-router-dom";

const links = [
  {path: "batching", name: "Batching"},
  {path: "transaction", name: "Transactions"}
]

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__list">
              {links.map(item => (
                <li className="sidebar__list__item" key={item.path+item.name}>
                  <NavLink to={item.path} className="sidebar__link">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
        </div>
    );
}

export default Sidebar;
