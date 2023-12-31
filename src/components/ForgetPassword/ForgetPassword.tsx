import { Link } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout";
// Icons
import { RiMailLine } from "react-icons/ri";
export function CForgetPassword () {
  return (
    <MainLayout>
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Recuperar <span className="text-primary">contraseña</span>
        </h1>
        <form className="mb-8">
          <div className="relative mb-8">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Enviar instrucciones
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-2">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Ingresa
            </Link>
          </span>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
        </MainLayout>
  );
};

