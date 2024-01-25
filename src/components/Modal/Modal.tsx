import React from "react";
import { RiCloseFill } from "react-icons/ri";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode
};
export const Modal: React.FC<propTypes> = ({open, onClose, children}) =>{
  return (
    <>
    <div
      className={`fixed inset-0 flex justify-center items-center 
    transition-colors p-6 ${open ? "visible bg-black/65 " : "invisible"}
    `}
      onClick={onClose}
    >
      <div
        className={`py-3 px-6 bg-secondary-100 w-full outline-none rounded-lg
        transition-all max-w-md 
        ${open ? "scale-100 opacity-100" : "scale-110 opacitiy-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 rounded-full text-white"
          onClick={onClose}
        >
         <RiCloseFill  />
        </button>
        {children}
      </div>
    </div>
    </>
  );
};