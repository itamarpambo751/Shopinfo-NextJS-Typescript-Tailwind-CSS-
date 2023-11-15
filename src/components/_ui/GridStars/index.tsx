import {
    BsStarFill
} from "react-icons/bs"

interface GridStarsProps {
    fill: number
    quant: number
}

export const GridStars: React.FC<GridStarsProps> = ({ fill, quant }) => {
    return(
        <div className='flex justify-start items-center gap-1'>
            <span className='flex justify-center items-start gap-1'>
                {[0, 0, 0, 0, 0].map((star, index) => {
                    return (index < fill) ? (
                        <i className='text-[.6rem] text-yellow-500' key={index}>
                            <BsStarFill />
                        </i>
                    ):(
                        <i className='text-[.6rem]' key={index}>
                            <BsStarFill />
                        </i>
                    )
                })}
            </span>
            <div className='h-[.4rem] w-20 bg-slate-300'/>
            <span className='text-[13px] text-slate-300'>({ quant })</span>
        </div>
    )
} 