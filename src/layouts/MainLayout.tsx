import React from "react";

type MainProps = {
    children: React.ReactNode; // 👈️ type children
  };



export function MainLayout (props: MainProps){

    return(
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
                {props.children}
            </div>
        </div>
    )
}

