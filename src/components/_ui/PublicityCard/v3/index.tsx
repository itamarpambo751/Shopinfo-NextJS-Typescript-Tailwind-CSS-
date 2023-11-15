import PublicityCard from ".."
import { Hr, PublicityLabel } from "../.."

export const PublicityCardV3: React.FC = () =>
<PublicityCard.Root className='flex justify-center items-center py-5 px-5 w-[230px]' id="1" resize>
    <div>
        <PublicityLabel.Root>
            <PublicityLabel.Content bigText="-18%"/>
        </PublicityLabel.Root>
    </div>
    <div className='mt-[-30px]'>
        <PublicityCard.Image url="../assets/img/1(7).png"/>
    </div>
    <PublicityCard.Content.Root>
        <PublicityCard.Content.Price 
            price="1.239,90" 
            oldPrice="2.014,20" 
            color
        />
        <br />
        <div className='flex justify-center items-center mb-12'>
            <Hr className="w-full border-1 border-[#111]"/>
            <PublicityCard.Content.Stars value={28}/>
            <Hr className="w-full border-1 border-[#111]"/>
        </div>
        <PublicityCard.Content.Product 
            name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" className='text-sm' 
            subtring={68} 
            noBold
        />
        <button className='mt-2 rounded-md uppercase text-[.8rem] font-bold p-[.5rem] text-white bg-[var(--red-text-color)]'>
            Comprar junto
        </button>
    </PublicityCard.Content.Root>
</PublicityCard.Root>