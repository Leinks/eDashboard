import { FC, useState } from 'react';
import { SidebarItem } from '../../models/Props';
import { Link, useLocation } from 'react-router-dom';
// import styled from ''

type SidebarLinkProps = {
    item: SidebarItem;
};





const SubMenu: FC<SidebarLinkProps> = ({ item }) => {
    const location = useLocation();
    const [children, setChildren] = useState(false);
    const showSubmenu = () => setChildren(!children);
    const SideBarLink =`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors ${location.pathname === item.path ? "bg-secondary-900 transition-colors font-bold" : ""}`
    return (
        <>


            <Link className={SideBarLink} to={item.path} onClick={showSubmenu}>
                <div>
                    <span className="flex items-center gap-4">
                    {item.icon}
                    {item.title}  
                    <div>{item?.children && children ? item?.iconOpened : item?.iconClosed}</div>
                    </span>
                </div>
            </Link>
            {children && item?.children?.map((Childrens, index) => {
                const SubmenuLink = `rounded-lg hover:bg-submenu-900 py-1 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors ${location.pathname === Childrens.path ? "bg-submenu-900 transition-colors font-bold" : ""}`
                return (
                    <Link  className={SubmenuLink} to={Childrens.path} key={index} >
                      <span className="flex items-center gap-2">{Childrens.icon}{Childrens.title}</span>   
                        
                    </Link>
                )
            })}


  
        </>
    )
}
export default SubMenu;

{/* <li>
<button
onClick={() => setShowSubmenu(!showSubmenu)}
className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
>
<span className="flex items-center gap-4">
    <RiEarthLine className="text-primary" /> Redes sociales
    </span>
    <RiArrowRightSLine
        className={`mt-1 ${
        showSubmenu && "rotate-90"
        } transition-all`}
    />
    </button>
<ul
className={` ${
    showSubmenu ? "h-[130px]" : "h-0"
} overflow-y-hidden transition-all`}
>


</ul>
</li> */}

{/* <li>
<Link
to={item.path}
className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
>
    {item.title}
</Link>
</li>
<li>
    <Link
    to="/"
    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
    >
    Estadisticas
    </Link>
</li>
<li>
    <Link
    to="/"
    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
    >
    Perfiles
    </Link>
</li> */}