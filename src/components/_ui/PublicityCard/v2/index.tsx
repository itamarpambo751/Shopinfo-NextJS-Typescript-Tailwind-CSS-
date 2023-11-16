import Image from "next/image"
import PublicityCard from ".."
import { Hr, PublicityLabel } from "../.."

export const PublicityCardV2: React.FC = () => {
    return(
        <PublicityCard.Root className='px-7 py-3 w-[230px]' id="1" resize>
            <div>
                <PublicityLabel.Root>
                    <PublicityLabel.Content bigText="-18%"/>
                </PublicityLabel.Root>
            </div>
            <div className='mt-[-30px]'>
                <PublicityCard.Image url="/assets/img/1(7).png"/>
            </div>
            <PublicityCard.Content.Root>
                <div className="scale-95">
                    <br />
                    <PublicityCard.Content.Product 
                        name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" 
                        className='text-sm' 
                        subtring={28} 
                        noBold
                    />
                    <PublicityCard.Content.Price 
                        price="1.239,90" 
                        oldPrice="2.014,20" 
                        color
                    />
                </div>
                <br />
                <div className='flex justify-center items-center'>
                    <Hr className="w-full border-1 border-[#111]"/>
                    <PublicityCard.Content.Stars value={28}/>
                    <Hr className="w-full border-1 border-[#111]"/>
                </div>
                <div>
                    <strong className="text-sm text-[var(--whatsap-color)] times-new">Geforce RTX 3060 12GB</strong>
                    <ul className="flex justify-start items-center gap-2">
                        <li className="flex justify-start items-center gap-1">
                            <Image 
                                src="/assets/icons/processador.png"
                                alt="processor"
                                width={12}
                                height={12}
                            />
                            <small className="text-[10px]">
                                Ryzen 5 5600
                            </small>
                        </li>
                        <li className="flex justify-start items-center gap-1">
                            <Image 
                                src="/assets/icons/processador.png"
                                alt="processor"
                                width={12}
                                height={12}
                            />
                            <small className="text-[10px]">
                                16GB
                            </small>
                        </li>
                        <li className="flex justify-start items-center gap-1">
                            <Image 
                                src="/assets/icons/processador.png"
                                alt="processor"
                                width={12}
                                height={12}
                            />
                            <small className="text-[10px]">
                                SSD 240GB
                            </small>
                        </li>
                    </ul>
                </div>
            </PublicityCard.Content.Root>
        </PublicityCard.Root>
    )
}