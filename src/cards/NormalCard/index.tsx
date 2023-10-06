

import React from 'react';
import {VscHeart} from 'react-icons/vsc'
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";

interface CardNormalProps {
    name: string
    price: string
    id:string
    desconto:string
    imglLink:string
  }
  
  const CardNormal: React.FC<CardNormalProps> = ({
    name,price,desconto,id,imglLink
  }: CardNormalProps) => {
  return (
<PublicityCard.Root id={id}  resize>
<div className="flex justify-between items-center p-1">
             <PublicityLabel.Root>
               <PublicityLabel.Content small={true} bigText={"-"+desconto}/>
             </PublicityLabel.Root>
             <div className='flex items-center justify-center'>
              <p className='text-[20px]'><VscHeart/></p>
             </div>
</div>
           <div className='w-[80%] flex items-center justify-center'>
             <PublicityCard.Image url={imglLink}/>
           </div>
          
           <PublicityCard.Content.Root>
             <PublicityCard.Content.Price resize={true} price={price} oldPrice={price} color/>
           </PublicityCard.Content.Root>
           <Hr className='border-[var(--text-color-lite)] mt-3 border-[1px] w-[100%]' />
           <div className="w-[100%] mt-2">
               <PublicityCard.Content.Product size={0.2} name={name} subtring={52} noBold/>
           </div>
</PublicityCard.Root>
  )
}
export default CardNormal;











{/*  */}