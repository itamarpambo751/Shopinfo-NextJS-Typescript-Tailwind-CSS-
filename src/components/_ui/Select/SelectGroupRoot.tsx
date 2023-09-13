import React from 'react'
import { ReactNode } from 'react'

interface SelectGroupRootProps {
  children: ReactNode
}

const SelectGroupRoot: React.FC<SelectGroupRootProps> = ({ children }: SelectGroupRootProps) => {
  return (
    <div className="flex flex-col w-[100%] gap-1">
      { children }
    </div>
  )
}

export default SelectGroupRoot