import './Sidebar.css';
import { Link } from '../components/link';

const links = [
  {path: "batching", name: "Batching"},
  {path: "suspense", name: "Suspense"},
  {path: "transitions", name: "Transitions"},
  {path: "deffered", name: "Deffered"},
  {path: "upgrading", name: "Upgrading"}
]

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__list">
              {links.map(item => (
                  <li className="sidebar__list__item" key={item.path+item.name}>
                    <Link to={item.path} className="sidebar__link">
                        {item.name}
                    </Link>
                  </li>
              ))}
            </ul>
        </div>
    );
}

export default Sidebar;
