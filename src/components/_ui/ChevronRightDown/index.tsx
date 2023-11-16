import { useState } from "react"
import { 
    BsChevronRight,
    BsChevronDown, 
    BsChevronUp,
    BsSearch
} from "react-icons/bs"
import { ChevronChecks } from "../ChevronChecks"
  
interface ChevronRightDownProps {
    item: {
        name: string,
        items: string[]
    }
}

export const ChevronRightDown: React.FC<ChevronRightDownProps> = ({ 
    item 
}) => {

    const [chevronRight, setChevronRight] = useState<Boolean>(true)

    return (
        <li className="b-bottom bg-[#dadada19]">
            <div  
                onClick={() => setChevronRight(!chevronRight)} 
                className="px-3 flex justify-between items-center gap-3 py-4 cursor-pointer text-[var(--text-light)]">
                <span className="uppercase font-light text-[13px]">{item.name}</span>
                <i>
                    {chevronRight ? (
                        <BsChevronDown />
                    ):(
                        <BsChevronUp />
                    )}
                </i>
            </div>
            {!chevronRight && (
                <>
                    {item.items.length > 5 && (
                        <form className="flex justify-between items-center gap-3 px-3 pb-4 w-full">
                            <input type="text" placeholder="Procure por nome ou descrição" 
                            className="flex-1 text-sm text-[12.5px] transition-shadow duration-150 border-[.1rem] border-[var(--border-color)]
                            placeholder:text-[var(--border-color)] py-[.45rem] px-1 outline-none h-[25px]
                            bg-[var(--background-color)] rounded-[.4rem]"/>
                            <i className="text-[var(--text-light)] text-[1rem]">
                                <BsSearch />
                            </i>
                        </form>
                    )}
                    <ul className="w-full flex flex-col bg-[#181818]">
                        {item.items.map((sub, i) => <ChevronChecks span={sub} key={i}/>)}
                    </ul>
                </>
            )}
        </li>
    )
}