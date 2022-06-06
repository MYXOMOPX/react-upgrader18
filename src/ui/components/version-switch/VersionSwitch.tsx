import React, {FC, ReactNode} from "react";
import "./VersionSwitch.css"
import {Link} from "../link/Link";
import {Route, Routes} from "react-router";

interface VersionSwitchProps {
  children: [ReactNode, ReactNode]
}

export const VersionSwitch: FC<VersionSwitchProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <nav className="version-switch">
        <Link to="new" className="version-switch__link">v18</Link>
        <Link to="old" className="version-switch__link">Older</Link>
      </nav>
      <Routes>
        <Route path="new" element={children[0]}/>
        <Route path="old" element={children[1]}/>
      </Routes>
    </div>
  )
}
