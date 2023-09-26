import React from 'react';

interface PublicityLabelContentProps {
    smallText?: string
    bigText: string
    bold?: Boolean
    extrabold?: Boolean
    small?: Boolean
    widthTotal?: Boolean
}

const PublicityLabelContent: React.FC<PublicityLabelContentProps> = ({
    smallText, bigText, widthTotal, bold, small, extrabold
}: PublicityLabelContentProps) => {
  return (
    <span className={`flex flex-col text-[.8rem] text-center w-[${widthTotal?'100%':''}] `}>
        { smallText && (
            <p>{ smallText }</p>
        )}
        <p 
          id='expires_time' 
          className={
            `text-[${small ? '.87rem':'1rem'}] 
            ${bold ? 'font-bold':extrabold ? 'font-extrabold':''}`
          }>
            { bigText }
          </p>
    </span>
  )
}

export default PublicityLabelContent;