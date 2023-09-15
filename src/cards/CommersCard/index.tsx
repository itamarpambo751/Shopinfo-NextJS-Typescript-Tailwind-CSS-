

import React from 'react';
import {VscHeart} from 'react-icons/vsc'
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";

interface CommersCardProps {
    title?: string
    img: string
  }

 export const  CommersCard: React.FC<CommersCardProps> = ({
    title,img
  }: CommersCardProps) => {
  return (
<PublicityCard.Root id="1"  resize>
<div className="flex justify-between items-center p-1">
             <PublicityLabel.Root>
               <PublicityLabel.Content small={true} bigText="-18%"/>
             </PublicityLabel.Root>
             <div className='flex items-center justify-center'>
              <p className='text-[20px]'><VscHeart/></p>
             </div>
</div>
           <div className='w-[80%] h-[140px] flex items-center justify-center'>
             <PublicityCard.Image url={img}/>
           </div>
          
           <PublicityCard.Content.Root>
             <PublicityCard.Content.Price resize={true} price="1.239,90" oldPrice="2.014,20" color/>
           </PublicityCard.Content.Root>
          <div className='relative w-full flex items center- justify-center'>
           <Hr className='border-[black] mt-3 border-[1px] w-[100%] z-2' />
          <div className='z-4 flex absolute bg-[#111] items-center justify-center'>
          <PublicityCard.Content.Stars value={4} left/>
          </div>
       
          </div> 
           <div className="w-[100%] mt-2">
            <div>
            <PublicityLabel.Content  bigText="ksidj jw9ejfw iowj9efw je9r iejirg +"/>
            </div>
            <div className='w-full'>
              <PublicityLabel.Root expires={true}>
               <PublicityLabel.Content  bigText="COMPRAR JUNTO"/>
             </PublicityLabel.Root>
            </div>
           

           </div>
</PublicityCard.Root>
  )
}










{/*  */}