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

  const PublicityCardContextProps = useContext(PublicityCardContentContext)

  return (
    <div>
        {PublicityCardContextProps.resize && <PublicityCardProductPrice price={price} oldPrice={oldPrice} resize/>}

        {PublicityCardContextProps.resize && <PublicityCard.Content.Stars value={246}/>}

        <span data-resize={PublicityCardContextProps.resize} className="data-[resize=true]:text-[.77rem]"> {title} </span>

        {settings?.length && (
            <ul className="flex items-center justify-start gap-x-3 flex-wrap mt-1 pr-5 mb-1">
                {settings.map(({ imgUrl: url, setting }) => {
                    return (
                        <li key={setting} className="flex justify-start items-center gap-1">
                            <img
								src={url}
								data-resize={PublicityCardContextProps.resize}
								className="w-[15px] data-[resize=true]:w-[13px]"
							/>
                            <span
								data-resize={PublicityCardContextProps.resize}
								className="text-[.9rem] data-[resize=true]:text-[.77rem]"
							>
								{setting}
							</span>
                        </li>
                    )
                })}
            </ul>
        )}
        {!PublicityCardContextProps.resize && (
            <PublicityCardProductPrice price={price} oldPrice={oldPrice}/>
        )}
    </div>
  )
}

export default PublicityCardDescription;