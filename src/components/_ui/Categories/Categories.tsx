import Image from 'next/image'
import React from 'react'

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
    <ul className="flex justify-center flex-wrap xl:justify-between gap-7 max-[500px]:gap-4">
      {
        categories.map((item, i) => {
          return (
            <li key={i} className="category-block effect-hover rounded-[.4rem] bg-[#dadada19] flex justify-center flex-col items-center gap-2 w-[120px] p-2 pb-3">
              <Image 
                src={item.url} 
                alt='item'
                width={70}
                height={70}
              />
              <strong className="text-[.7rem]">{item.category}</strong>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Categories