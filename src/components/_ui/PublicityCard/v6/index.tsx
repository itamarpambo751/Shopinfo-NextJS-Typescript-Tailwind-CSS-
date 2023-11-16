import Link from "next/link"
import PublicityCard from ".."
import { Hr, PublicityLabel } from "../.."
import { BsHeart } from "react-icons/bs"
import { productsMethods } from "@/pages/api/products/_controller"

export const PublicityCardV6: React.FC = () => {
    return(
        <PublicityCard.Root 
            className='px-7 pt-3 w-[230px] bg-[#dadada0d]' 
            id="1" resize transparent
            useLinkJustOnCardBody
        >
            <div className="flex justify-between items-center z-[1000]">
                <PublicityLabel.Root>
                    <PublicityLabel.Content bigText="-18%"/>
                </PublicityLabel.Root>
                <PublicityLabel.Icon 
                    id="1"
                    icon={BsHeart} 
                    handleClick={productsMethods.addOnFavorites}
                />
            </div>
            <Link href={'/pc-gamer/'+1} className="z-0">
                <div className='mt-[-30px]'>
                    <PublicityCard.Image url="../assets/img/1(7).png"/>
                </div>
                <PublicityCard.Content.Root>
                    <div className="scale-95">
                        <br />
                        <PublicityCard.Content.Price 
                            price="1.239,90" 
                            oldPrice="2.014,20" 
                            color
                        />
                    </div>
                    <br />
                    <Hr className="w-full border-1 border-[#000]"/>
                    <div className="mt-12 mb-2 scale-95">
                        <PublicityCard.Content.Product 
                            name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" 
                            className='text-sm' 
                            subtring={73} 
                            noBold
                        /> 
                    </div>
                </PublicityCard.Content.Root>
            </Link>
        </PublicityCard.Root>
    )
}