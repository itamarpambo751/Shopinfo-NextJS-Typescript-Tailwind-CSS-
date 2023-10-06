
import React from 'react'

interface CheckListCardProps{
  item: string
  onInputvalue: (value: string) => void;
}

export const CheckListCard:React.FC<CheckListCardProps> =(
  {item, onInputvalue}:CheckListCardProps
)=>{
const [inputValue, setInputValue] = React.useState('');
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newValue = event.target.value;
  setInputValue(newValue);
  onInputvalue(newValue);
};
 
  return(
        <div className='w-[100%] p-2  mt-[5px] flex items-center'>
        <div className='border-[2px] border-[var(--first-color)] bg-transparent w-[20px] h-[20px] flex items-center justify-center'>
        <input value={item}
          onChange={handleInputChange}
         className='w-[100%] bg-[#111]' type='checkbox'/>
        </div>
        <p className='ml-[3px]'>{item}</p>
      </div>
    )
}