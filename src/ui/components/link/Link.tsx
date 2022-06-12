import React, {FC, ReactNode} from "react";
import "./Link.css"
import {NavLink} from "react-router-dom";

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string
  end?: boolean;
}

export const Link: FC<LinkProps> = (props) => {
  const {to, children, className, end} = props;

  return (
    <NavLink to={to} className={`link ${className || ""}`} end={end}>
      {children}
    </NavLink>
  )
}
