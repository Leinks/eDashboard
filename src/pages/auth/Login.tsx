import React, { useState } from "react";
import {AuthUser} from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { CheckPassword } from "../../components/CheckPassword"
// Icons
import {
  RiUser3Line,
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (event: any) => {
    // http.post('login',{email:email,password:password}).then((res)=>{
    //   console.log(res.data)
    // }) 
    event.preventDefault();
    try{

      if (!CheckPassword(password)) {
        AuthUser({
          email: email.toLocaleLowerCase(),
          password: password,
        })
          .then(async response => {
            //console.log(response)
            //  console.log(response.data.error)
            switch(response) {
              case 0:
  
                //console.log('Log In')
                navigate('/dashboard');
                break;
              case 1:
               //return alert('Ingreso Algun Dato Incorrecto');
               console.log(response)
             break;

              }
          })
        }
      }catch (e: any) {
          //console.info(e)
            //console.log(e.response)
          return alert(CheckPassword(password)!);
        }
    }
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Iniciar <span className="text-primary">sesión</span>
        </h1>
        <form className="mb-8">
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />
            Ingresa con google
          </button>
          <div className="relative mb-4">
            <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electrónico"
              onChange={e=>setEmail(e.target.value)}
              id="email"
              required
            />
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              onChange={e=>setPassword(e.target.value)}
              id="pwd"
              required
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
              //  type="submit"
              type="button"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
              onClick={handleLogin}>
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/olvide-password"
            className="hover:text-primary transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registro"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
