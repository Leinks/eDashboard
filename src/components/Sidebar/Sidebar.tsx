import { useState } from "react";
import SubMenu from './SubMenu';
import { SidebarData } from "./SidebarData";
import { Link, useNavigate  } from "react-router-dom";
// Icons
import * as RiIcons from 'react-icons/ri';

export function Sidebar () {
  // const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSignOut = () => {
    sessionStorage.removeItem('access_token')
    navigate('/')

  }
 
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[60%] md:w-[30%] lg:w-[20%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <Link to='/dashboard'>
            <h1 className="text-center text-2xl font-bold text-white mb-10">
              Admin<span className="text-primary text-4xl">.</span>
            </h1>
          </Link>
          <ul>
          {SidebarData.map((item, index) => {
                        return<li key={index}><SubMenu item={item}  /></li> ;
                    })}
            {/* {SidebarData.map((route) => (
              <li key={route.title}>
                <Link 
                  className={`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors
                    ${location.pathname === route.path ? "bg-secondary-900 transition-colors font-bold" : ""}`}
                  to={route.path}
                >{route.icon} {route.title}
                </Link> 
              </li>
            ))} */}
          </ul>
        </div>
        <nav>
          <button  onClick={handleSignOut}>
            <div  className="flex  items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                <RiIcons.RiLogoutCircleRLine className="text-primary" /> Cerrar sesión 
            </div>
          </button>         
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed top-4 left-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiIcons.RiCloseLine /> : <RiIcons.RiMenu3Line />}
      </button>
    </>
  );
};
;
