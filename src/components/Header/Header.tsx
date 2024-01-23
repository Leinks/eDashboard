import * as RiIcons from 'react-icons/ri';
import {  Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";
// import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import * as Routing from '../../routes/paths';
// import { useEffect, useState } from 'react';
// import { useInterval } from 'react-use';

export function Header () {
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(true);
  // const UserSession = new Date().getTime()
  // const Now = new Date().toLocaleTimeString()
  // const ExpireDate = new Date().getTime() +2

  // const onUpdateActivity = () => {
  //   if (loggedIn) {
  //     const session = Date.now() + 5000;
  //     localStorage.setItem("exTime", session.toString());
  //   }
  // }

  // const onCheckInActivity = () => {
  //   const exTime = localStorage.getItem('exTime');
  //   if (Number(exTime) <= Date.now())
  //     setLoggedIn(false)
  // }
  
  
  // useEffect(() => {
  //   setInterval(() => { onCheckInActivity(); }, 1000)

  //   onCheckInActivity()
  //   onUpdateActivity()
  //   console.log(loggedIn)
  //   // return () => {
  //     //   clearInterval(interval);
      
  //     // }
  //     if(loggedIn === false)
  //     {
  //       navigate("/");
  //       localStorage.removeItem('exTime')
      
  //     }
  // },)
  
 // setInterval(UserSession, 2400);
 
//  console.log('ExpireDate',ExpireDate)
// if(UserSession > UserSession + 2)
// {
//    console.log('UserSession',UserSession)

//   }
  
  const name = sessionStorage.getItem('name')
  const email = sessionStorage.getItem('email')

  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiIcons.RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                5
              </span>
            </MenuButton>
          }
          align="end"
          arrow={true}
          transition={true}
          // arrowClassName="bg-secondary-100"
          menuClassName	="bg-secondary-100 padding-left: 1rem"
        >
          <h1 className="text-gray-300 text-center font-medium">
            Notificaciones (2)
          </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <img
                src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>{email}</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to={Routing.PATH_LOGIN}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiIcons.RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  A Engelbert Tovar le gusta tu pub...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to={Routing.PATH_LOGIN}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiIcons.RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Engelbert Tovar ha comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to={Routing.PATH_LOGIN}
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>{name}</span>
              <RiIcons.RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          // arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to={Routing.PATH_PROFILE}
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">{name}</span>
                <span className="text-xs text-gray-500">{email}</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiIcons.RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
            to="/"
            onClick={() => sessionStorage.removeItem('accessToken')}
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiIcons.RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

