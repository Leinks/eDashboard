import * as RiIcons from 'react-icons/ri';
import * as Routing from '../../routes/paths';
import { SidebarItem } from '../../models/Props';

export const SidebarData: SidebarItem[] = [
    {
      path: Routing.PATH_DASHBOARD,
      title: 'Dashboard',
      icon: <RiIcons.RiDashboardFill className="text-primary" />
    },
    {
      path: Routing.PATH_ANALITICS,
      title: 'Analíticas',
      icon: <RiIcons.RiPieChart2Fill className="text-primary" />
    },
    {
      path: '#',
      title: 'Redes sociales',
      iconOpened: <RiIcons.RiArrowDownSLine />,
      iconClosed: <RiIcons.RiArrowRightSLine />,
      icon: <RiIcons.RiEarthLine className="text-primary" />,

      children: [
        {
          path: Routing.PATH_POST_SOCIAL_MEDIA,
          title: 'Post red social',
          icon: <RiIcons.RiArticleFill className="text-submenu-100" />
        },
        {
          path: Routing.PATH_ESTADISTICS,
          title: 'Estadisticas',
          icon: <RiIcons.RiBarChart2Fill className="text-submenu-100" />
        },
        {
          path: Routing.PATH_PROFILE,
          title: 'Perfiles',
          icon: <RiIcons.RiProfileFill className="text-submenu-100" />
        },
        {
          path: Routing.PATH_CLIENTS,
          title: 'Clientes',
          icon: <RiIcons.RiTeamFill className="text-submenu-100" />
          
        },
        

      ],
      
    },

    {
      path: Routing.PATH_TICKETS,
      title: 'Tickets',
      icon: <RiIcons.RiMailSendFill className="text-primary" />
    },
    {
      path: Routing.PATH_COMPANY,
      title: 'Compañias',
      icon: <RiIcons.RiCommunityFill className="text-primary" />
      
    },
    {
      path: Routing.PATH_LOCAL,
      title: 'Locales',
      icon: <RiIcons.RiStore3Fill className="text-primary" />
      
    },
    {
      path: Routing.PATH_CATEGORY,
      title: 'Categorias',
      icon: <RiIcons.RiPriceTag3Fill className="text-primary" />
      
    },
    {
      path: Routing.PATH_PRODUCT,
      title: 'Productos',
      icon: <RiIcons.RiShoppingBag3Fill className="text-primary" />
      
    },
    {
      path: Routing.PATH_CALENDAR,
      title: 'Calendario',
      icon: <RiIcons.RiCalendarTodoLine className="text-primary" />
    },

  ]