import { Sidebar } from "../components/Sidebar/Sidebar.js";
// import { Header } from "../components/Header/Header";
import {Header} from "../components/Header/Header.js"


interface AppLayoutProps {
  children: React.ReactNode;
}

const LayoutAdmin = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
