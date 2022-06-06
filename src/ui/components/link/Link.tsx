import React, {FC, ReactNode} from "react";
import "./Link.css"
import {NavLink} from "react-router-dom";

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string
}

export const Link: FC<LinkProps> = (props) => {
  const {to, children, className} = props;

  return (
    <NavLink to={to} className={`link ${className || ""}`}>
      {children}
    </NavLink>
  )
}
