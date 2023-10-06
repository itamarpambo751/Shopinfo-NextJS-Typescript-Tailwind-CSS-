
import { BsFire } from "react-icons/bs";
import {PublicityCard, PublicityLabel} from "../../components/_ui";
import React from "react"
import { Truck } from 'phosphor-react';

interface spetialPromotionProps{
  id:string
  img:string
  desconto:string
  name:string
  price:string
  oldPrice:string
}
export const SpecialPromotionCard:React.FC<spetialPromotionProps>=(
  {id,img,desconto,name,price,oldPrice}:spetialPromotionProps
)=>{
    return(
      <PublicityCard.Root id={id} resize>
            <div className="flex justify-start items-center gap-2 mb-12">
              <PublicityLabel.Root expires>
                <PublicityLabel.Icon icon={BsFire}/>
                <PublicityLabel.Content bigText="14D 17:23:56" bold/>
              </PublicityLabel.Root>
              <PublicityLabel.Root>
                <PublicityLabel.Content bigText={desconto}/>
              </PublicityLabel.Root>
            </div>
            <PublicityCard.Image url={img}/>
            <PublicityCard.Content.Root>
              <div className="w-[100%] mt-8">
                <PublicityCard.Content.Product name={name} subtring={52} noBold/>
              </div>
              <br />
              <PublicityCard.Content.Price price={price} oldPrice={oldPrice} color/>
              <PublicityCard.Content.Stars value={28} left/>
            </PublicityCard.Content.Root>
          </PublicityCard.Root>
    )
}
