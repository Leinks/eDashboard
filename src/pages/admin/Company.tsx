import { Link } from "react-router-dom";

import { RiArrowRightLine,  RiFilter2Fill } from "react-icons/ri";
import { CardCompany } from "../../components/Cards/CardCompany";
import { GetCompany } from "../../components/FetchApi/GetCompany";
import { Tab,} from "@headlessui/react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import * as Routing from '../../routes/paths';
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useEffect, useState } from "react";
import moment from "moment";

export function Company() {
  const [Companys, setCompanys] = useState<any[]>([])
  const [Data, setData] = useState(null)
  // const Company = GetCompany()
  //   console.log('Company',Company)
  useEffect(()=>{
    if (!Data)
    {
      const FindCompanys = async () => {
        try {
        await GetCompany().then((response) =>{
            setCompanys(response?.data.data)
            setData(response?.data.data)
            console.log('Companys',Companys)
          })
        } catch (error: any) {
          console.log('Company Error',error)
        }
      } 

      FindCompanys()
    }
  },[Companys])
  return (
    <div>
    {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-6">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Compañias</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
            <span> {'>'} </span>
            <span>Compañias</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filter
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Create
          </button>
        </div>
      </div>
      {/* Cards*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <CardCompany
          ticket="total"
          totalTickets="45"
          text="Compañias"
        />
        <CardCompany
          ticket="inProcess"
          totalTickets="61"
          text="Locales"
        />
        <CardCompany
          ticket="close"
          totalTickets="130"
          text="Ventas"
        />
      </div>
      <Tab.Group>
          <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">
                    Compañias con Facturas Vencidas
                  </h1>
                </div>
                {/* Content card */}
                <div>          
                    <div className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      0% Del total de Compañias{" "}
                      <span className="bg-secondary-900 text-white text-4xl py.0.5 px-2 rounded-lg text-end">
                        0
                      </span>
                    </div>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">Compañias Desactivadas</h1>
                </div>
                {/* Content card */}
                <div>
                    <div className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      0% Del total de Compañias{" "}
                      <span className="bg-secondary-900 text-white text-4xl py.0.5 px-2 rounded-lg text-end">
                        0
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/*Table*/}
      <div>
        <h1 className="text-2xl text-white my-6">Listado de Compañias</h1>
      </div>
      <div className="bg-secondary-100 p-6 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 p-4">
          <h5>Estatus</h5>
          <h5>Nombre</h5>
          <h5>Telefono</h5>
          <h5>Fecha</h5>
          <h5>Acciones</h5>
        </div>

          
          {Companys!.map((item) => (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl" key={item._id}>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
                <span className="py-1 px-2 bg-yellow-500/10 text-green-500 rounded-lg">
                  Activo
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
                <span>{item.name}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Telefono</h5>
                <p>{item.phone}</p>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
                <span>{ moment(item.created_at).format('ll') }</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
                <Menu
                  menuButton={
                    <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                      Acciones
                    </MenuButton>
                  }
                  align="end"
                  arrow
                  //arrowClassName="bg-secondary-100"
                  transition
                  menuClassName="bg-secondary-900 p-4"
                  theming="primary"
                >
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to={Routing.PATH_PROFILE}
                      className="rounded-lg transition-colors text-gray-600 hover:text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                    >
                      Dashboard tickets
                    </Link>
                  </MenuItem>
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to={Routing.PATH_PROFILE}
                      className="rounded-lg transition-colors  text-gray-600 hover:text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                    >
                      Información
                    </Link>
                  </MenuItem>
                </Menu>
              </div>

            </div>
          ))}
        </div>

      </div>
    
  )
}
