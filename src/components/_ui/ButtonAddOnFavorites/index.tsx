import { productsMethods } from '@/pages/api/products/_controller';
import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

// import { Container } from './styles';

export const IconButtonAddOnFavorites: React.FC<{id: string}> = ({ id }) => {
    const [changeFavorite, setChangeFavorite] = useState(false)
    return(
        <>
            {changeFavorite ? (
                <i className="text-2xl text-white"  onClick={() => {
                    setChangeFavorite(!productsMethods.removeFromFavorites(id))
                }}>
                    <BsHeartFill/>
                </i>
            ):(
                <i onClick={() => {
                    setChangeFavorite(productsMethods.addOnFavorites(id))
                }} className="text-2xl text-white">
                    <BsHeart/>
                </i>
            )}
        </>
    )
}