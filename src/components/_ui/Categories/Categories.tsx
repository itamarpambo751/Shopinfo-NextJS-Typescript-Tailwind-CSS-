import React from 'react'
import Link from 'next/link';

interface Categories {
  url: string
  category: string
}

interface CategoriesProps {
  categories: Categories[]
}

const Categories: React.FC<CategoriesProps> = ({
  categories
}: CategoriesProps) => {
  return (
    <ul className="flex h-[105px] max-md:h-[160px] justify-between gap-7 md-flex-grid">
      {
        categories.map((item, i) => {
          return (
             
            <li key={i} className="category-block efect-hover li-image-rounded rounded-[.4rem] bg-[var(--shadow-color-lite)] flex justify-center h-[100%] max-md:h-[100px] flex-col items-center gap-2 w-[10%] max-md:w-[100px] p-2 pb-3">
             <Link key={i} href={`search/${item.category}`}> 
              <img src={item.url} className="w-[70px]"/> 
              <strong className="text-[.7rem]">{item.category}</strong>
           </Link>
           </li>
          )
        })
      }
    </ul>
  )
}

export default Categories