import React, { ElementType } from 'react';

interface IconButtonProps {
	icon?: ElementType
	uppercase?: Boolean
	bold?: Boolean
	children: string
	className?: string
}
const IconButton: React.FC<IconButtonProps> = ({
	icon: Icon, children, uppercase, bold, className
}: IconButtonProps) => {
	return (
		<button
			data-uppercase={uppercase}
			data-bold={bold}
			className={`
			flex justify-center items-center gap-3 bg-[var(--red-text-color)]
			py-3 rounded-md data-[uppercase=true]:uppercase data-[bold=true]:font-bold ${className} `}
		>
			{Icon && <i className='text-2xl'> <Icon /> </i>}
			{ children }
    </button>
	)
}

export default IconButton;