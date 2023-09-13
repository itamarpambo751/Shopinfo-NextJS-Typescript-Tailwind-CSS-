import React from 'react';

interface SelectContentProps {
  options: string[]
}

const SelectContent: React.FC<SelectContentProps> = ({ options }: SelectContentProps) => {
  return (
    <select id="video">
      {
        options.map((option, i) => {
          return (
            <option value={i} key={i}>{ option }</option>
          )
        })
      }
    </select>
  )
}

export default SelectContent