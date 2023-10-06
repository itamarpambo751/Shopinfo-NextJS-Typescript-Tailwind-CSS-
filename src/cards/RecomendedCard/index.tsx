

import React from 'react';
import {VscHeart} from 'react-icons/vsc'
import { Shopinfo } from "../../components";
import { BsShare, BsCart4 } from 'react-icons/bs';
import { Card } from '@/cards';
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";

interface RecomendedCardProps {
    title?: string
  }

 export const  RecomendedCard: React.FC<RecomendedCardProps> = ({
    title
  }: RecomendedCardProps) => {
  return (
<PublicityCard.Root id="1" resize>
            <div className="flex justify-start items-center gap-2 mb-12">              
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText="-18%"/>
              </PublicityLabel.Root>
            </div>
<div className='w-full'>
    <PublicityCard.Image url="../assets/img/1(7).png"/>
</div>
<div className='h-[10px]'/>
            <PublicityCard.Content.Root>
              <div className="w-[100%] mt-[10px]">
                <PublicityCard.Content.Product 
              size={0.8}
				     name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
              </div>
              <br />
             <PublicityCard.Content.Price resize={true} price="1.239,90" oldPrice="2.014,20" color/>
             <div className='w-[100%] flex items-center justify-around'>
          <div className='relative w-full flex items center- justify-center'>
          <Hr className='border-[var(--shadow-color)] mt-3 border-[1px] w-[100%] z-2' />
          <div className='z-4 flex absolute bg-[var(--background-color)] items-center justify-center'>
          <PublicityCard.Content.Stars value={4} left/>
          </div></div>
			 </div>
			  

			  <h1 className='text-[var(--first-color)] font-bold text-[12px] mt-[8px]'>Radeon Vega 7 Integrado</h1>
			  <div className='flex'>
				<div className='flex'>
					<img src='../assets/icons/processor.png' className='w-[20px] h-[15px]' />
					<p className='ml-[3px] text-[11px]'>Ryzen 5 5600G</p>
				</div>
				<div className='flex ml-[3px]'>
					<img src='../assets/icons/memory.png' className='w-[20px] h-[15px]'/>
					<p className='ml-[3px] text-[11px]'>16GB</p>
				</div>
				<div className='flex ml-[3px]'>
					<img src='../assets/icons/ssd.png' className='w-[20px] h-[15px]' />
					<p className='ml-[3px] text-[11px]'>SSD</p>
				</div>
			  </div>
                      
            </PublicityCard.Content.Root>
  </PublicityCard.Root>

  )
}

