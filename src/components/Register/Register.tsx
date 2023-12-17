import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UpperCase } from '../UpperCase/UpperCase'
import { MainLayout } from "../../layouts/MainLayout";
import { RegisterUser } from "../RegisterUser/RegisterUser";
// Icons
import { RiMailLine, RiLockLine, RiEyeLine,RiEyeOffLine, RiUserLine} from "react-icons/ri";

export function CRegister () {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleRegister = async (event: any) => {
    event.preventDefault();
    const FullName = UpperCase(name + ' ' + lastname)
    if (password !== passwordConfirmation){
      return alert('La Contraseña debe ser Igual')
    }else{

      try{
        RegisterUser({
            name:FullName,
            email: email.toLocaleLowerCase(),
            password: password,
            //passwordConfirmation: passwordConfirmation
          })
            .then(async response => {
              //console.log(response)
              //console.log(response.data.error)
              switch(response) {
                case 0:
    
                  // console.log('Registered')
                  // console.log(response)
                  navigate('/dashboard');
                  break;
                case 1:
                 return alert('Ingreso Algun Dato Incorrecto');
                
               break;
  
                }
            })
          
        }catch (e: any) {
            //console.info(e)
              //console.log(e.response)
            //return alert(CheckPassword(password)!);
          }
    }
    }

  

  

  return (
    <MainLayout>
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Crear <span className="text-primary">cuenta</span>
        </h1>
        <form className="mb-8" onSubmit={handleRegister}>
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />
            Registrate con google
          </button>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              value={name}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              value={lastname}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Apellido"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              value={email}
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Contraseña"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              value={passwordConfirmation}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Confirmar contraseña"
              autoComplete="new-password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Registrarme
            </button>
          </div>
        </form>
        <span className="flex items-center justify-center gap-2">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/"
            className="text-primary hover:text-gray-100 transition-colors"
          >
            Ingresa
          </Link>
        </span>
    </MainLayout>
  );
};


