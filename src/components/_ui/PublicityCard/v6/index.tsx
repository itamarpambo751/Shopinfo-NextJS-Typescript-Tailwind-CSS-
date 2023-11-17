import Link from "next/link"
import PublicityCard from ".."
import { Hr, PublicityLabel } from "../.."
import { IconButtonAddOnFavorites } from "../../ButtonAddOnFavorites"

export const PublicityCardV6: React.FC<{
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
            className='px-7 pt-3 w-[230px] bg-[#dadada0d] before-name' 
            id={computer.id} resize transparent
            useLinkJustOnCardBody
        >
            <div className="before text-[11px]">
                <i>{computer.name}</i>
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
                <PublicityCard.Content.Root>
                    <div className="scale-95">
                        <br />
                        <PublicityCard.Content.Price 
                            price={computer.price} 
                            oldPrice={computer.old_price} 
                            color
                        />
                    </div>
                    <br />
                    <Hr className="w-full border-1 border-[#000]"/>
                    <div className="mt-12 mb-2 scale-95">
                        <PublicityCard.Content.Product 
                            name={computer.name} 
                            className='text-sm' 
                            subtring={52} 
                            noBold
                        /> 
                    </div>
                </PublicityCard.Content.Root>
            </Link>
        </PublicityCard.Root>
    )
}