

import React from 'react';
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";

interface CardNormalProps {
    title?: string
  }

  const CardNormal: React.FC<CardNormalProps> = ({
    title
  }: CardNormalProps) => {
  return (
<PublicityCard.Root id="2"  resize>
  <div className="flex justify-start items-center p-1">
             <PublicityLabel.Root>
               <PublicityLabel.Content small={true} bigText="-18%"/>
             </PublicityLabel.Root>
</div>
           <div className='w-[80%] flex items-center justify-center'>
             <PublicityCard.Image url="./assets/img/3.png"/>
           </div>
          
           <PublicityCard.Content.Root>
             <PublicityCard.Content.Price resize={true} price="1.239,90" oldPrice="2.014,20" color/>
           </PublicityCard.Content.Root>
           <Hr className='border-[#111] mt-3 border-[1px] w-[100%]' />
           <div className="w-[100%] mt-2">
               <PublicityCard.Content.Product size={0.2} name="Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
           </div>
</PublicityCard.Root>
  )
}
export default CardNormal;











{/*  */}