import Link from "next/link"
import PublicityCard from ".."
import { Hr, PublicityLabel } from "../.."
import { IconButtonAddOnFavorites } from "../../ButtonAddOnFavorites"
import Image from "next/image"
import { ImCheckboxUnchecked } from "react-icons/im"

export const PublicityCardV7: React.FC<{
computer: {
    title: string;
    price: string;
    old_price: string;
    stars: number;
    favorites: boolean;
    id: string;
    image: string;
    name: string;
    processor: string;
    mark: string;
    videoboard: string;
    memory: string;
    HD: string;
    SSD: string;
    WIFI: boolean;
    specifications: {
        icon: string, setting: string
    }[];
}}> = ({ computer }) => {
    return(
        <PublicityCard.Root 
            className='px-7 pt-3 w-[230px] bg-[#dadada19] before-name' 
            id={computer.id} resize transparent
            useLinkJustOnCardBody
        >
            <div className="before text-[11px]">
                <i>{computer.name}</i>
            </div>

            <div className="videoboard">
                <span>{computer.processor}</span>
                <span>
                    {computer.videoboard}
                </span>
            </div>

            <div className="flex justify-between items-center z-[999]">
                <PublicityLabel.Root>
                    <PublicityLabel.Content bigText="-18%"/>
                </PublicityLabel.Root>
                <IconButtonAddOnFavorites id={computer.id}/>
            </div>
            <Link href={'/pc-gamer/'+computer.id} className="z-0">
                <div className='mt-[-30px]'>
                    <PublicityCard.Image url={computer.image}/>
                </div>
                <div className="mt-[2px]">
                    <PublicityCard.Content.Product 
                        name={computer.name} 
                        className='text-sm' 
                        subtring={52} 
                        noBold
                    />
                    <div className="flex items-center justify-start gap-2 mt-2 mb-3">
                        <div className="flex items-center justify-start gap-1">
                            <Image 
                                src={computer.specifications[1].icon}
                                alt="memory"
                                width={17}
                                height={17}
                            />
                            <span className="text-[13px]">{computer.specifications[1].setting}</span>
                        </div>
                        <span className="text-[13px]">{computer.specifications[2].setting}</span>
                    </div>
                    <PublicityCard.Content.Root>
                        <PublicityCard.Content.Price 
                            price={computer.price} 
                            color
                        />
                    </PublicityCard.Content.Root>
                    <div className="mt-3 flex items-center justify-start gap-1 mb-2">
                        <i className="text-[var(--red-text-color)]">
                            <ImCheckboxUnchecked />
                        </i>
                        <span className="text-[13px]">Compare</span>
                    </div>
                </div> 
            </Link>
        </PublicityCard.Root>
    )
}