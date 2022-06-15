import {FC, ReactNode, useMemo} from "react";
import "./HeaderNav.css"
import { Text } from "../../components/Text/Text";
import {Route, Routes} from "react-router";
import { Link } from "../link/Link";

interface RouteDescriptor {
  label: string,
  path: string,
  element: ReactNode
}

interface HeaderNavProps {
  title: string;
  routeDeccriptors?: Array<RouteDescriptor>
}

export const HeaderNav: FC<HeaderNavProps> = (props) => {
  const { title, routeDeccriptors = [] } = props;

  const routes = useMemo(() => {
    return routeDeccriptors.map(d => (
      <Route path={d.path} element={d.element} key={d.path+d.label}/>
    ))
  }, routeDeccriptors)

  return (
    <div>
      <nav className="header-nav">
        <Text className="header-nav__title" weight="bold" inline size="xlarge" color="white">{title}</Text>
        <div className="header-nav__routes">
          {routeDeccriptors.map(d => (
            <Link to={d.path} className="header-nav__link" end={d.path.length === 0} key={`${d.path}--${d.label}`}>{d.label}</Link>
          ))}
        </div>
      </nav>
      <Routes>
        {routes}
      </Routes>
    </div>
  )
}
