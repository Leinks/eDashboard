import { ReactNode } from "react";

import {  RiCheckboxCircleLine, RiErrorWarningLine, RiInformationFill, RiCloseCircleLine  } from "react-icons/ri";

type AlertProps = {
    variant?: 'success' | 'danger' | 'warning' | 'info'
    children: ReactNode
}

export  function Alert({ variant = "info", children }: AlertProps){

    const classVariants = {
        success: 'p-4 shadow inline-block max-w-lg bg-green-300 text-green-900 rounded-md m-2',
        warning: 'p-4 shadow inline-block max-w-lg bg-yellow-300 text-yellow-900 rounded-md m-2',
        danger: 'p-4 shadow inline-block max-w-lg bg-red-300 text-red-900 rounded-md m-2',
        info: 'p-4 shadow inline-block max-w-lg bg-blue-300 text-blue-900 rounded-md m-2'
    }

    return (
        <div className={classVariants[variant] +	'flex-inline gap-2 items-center'}>
            <span className="text-2xl">
                {	variant === 'success' ?	(
                	<RiCheckboxCircleLine />
                )	:	variant ===	'warning'	?	(
									<RiErrorWarningLine	/>
								)	:	variant ===	'danger'	?	(
									<RiCloseCircleLine	/>
								) :	(
									<RiInformationFill	/>
								)}
            </span>
            {children}
        </div>
    )
}