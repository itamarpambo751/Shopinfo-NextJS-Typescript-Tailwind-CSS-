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
		<button className={`
			flex justify-center items-center gap-3 bg-[var(--red-text-color)]
			${className} py-3 rounded-md ${uppercase && 'uppercase'} ${bold && 'font-bold'} text-xl`}
			>
			{Icon && <i className='text-2xl'> <Icon /> </i>}
			{ children }
    </button>
	)
}

export default IconButton;