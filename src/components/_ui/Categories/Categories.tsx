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
    <ul className="flex justify-between gap-7">
      {
        categories.map((item, i) => {
          return (
            <li key={i} className="category-block effect-hover li-image-rounded rounded-[.4rem] bg-[#dadada19] flex justify-center flex-col items-center gap-2 w-[10%] p-2 pb-3">
              <img src={item.url} className="w-[70px]"/>
              <strong className="text-[.7rem]">{item.category}</strong>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Categories