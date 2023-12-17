import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightLine, RiArrowRightSLine, RiDiscussLine, RiFileTextLine, RiFilter2Fill, RiGithubLine, RiSearch2Line, RiTicketLine, RiTwitterLine } from "react-icons/ri";
import CardTicket from "../../components/CardTicket/CardTicket";
import { Tab, Disclosure, Transition } from "@headlessui/react";

export function Company() {
  return (
    <div>
    {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
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
        <CardTicket
          ticket="total"
          totalTickets="45"
          text="Compañias"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="61"
          text="Locales"
        />
        <CardTicket
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
                  <Disclosure>
                    <div className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      0% Del total de Compañias{" "}
                      <span className="bg-secondary-900 text-white text-4xl py.0.5 px-2 rounded-lg text-end">
                        0
                      </span>
                    </div>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">Compañias Desactivadas</h1>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                  <Disclosure>
                    <div className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      0% Del total de Compañias{" "}
                      <span className="bg-secondary-900 text-white text-4xl py.0.5 px-2 rounded-lg text-end">
                        0
                      </span>
                    </div>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    

    </div>
  )
}
