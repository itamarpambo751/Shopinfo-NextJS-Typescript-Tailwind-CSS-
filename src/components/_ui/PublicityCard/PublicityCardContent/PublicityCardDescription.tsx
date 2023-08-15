import React, { useContext } from 'react';
import PublicityCardProductPrice from './PublicityCardProductPrice';
import PublicityCardContentContext from './PublicityCardContentContext';
import PublicityCard from '..';

interface Setting {
    imgUrl: string
    setting: string
} 

interface PublicityCardDescriptionProps {
    title: string
    price: string
    oldPrice?: string
    settings?: Setting[]
}

const PublicityCardDescription: React.FC<PublicityCardDescriptionProps> = ({
    title, settings, price, oldPrice
}: PublicityCardDescriptionProps) => {

  const { resize } = useContext(PublicityCardContentContext)  

  return (
    <div>
        {resize && <PublicityCardProductPrice price={price} oldPrice={oldPrice} resize/>}
        
        {resize && <PublicityCard.Content.Stars value={246}/>}
        
        <span className={`${resize && 'text-[.77rem]' }`}>{ title }</span>

        {settings?.length && (
            <ul className="flex items-center justify-start gap-x-3 flex-wrap mt-1 pr-5 mb-1">
                {settings.map(({ imgUrl, setting }) => {
                    return (
                        <li key={setting} className="flex justify-start items-center gap-1">
                            <img src={ imgUrl } className={`${resize ? 'w-[13px]':'w-[15px]'}`}/>
                            <span className={`${resize ? 'text-[.77rem]':'text-[.9rem]'}`}>{ setting }</span>
                        </li>
                    )
                })}
            </ul>
        )}

        {!resize && <PublicityCardProductPrice price={price} oldPrice={oldPrice}/>}
    </div>
  )
}

export default PublicityCardDescription;