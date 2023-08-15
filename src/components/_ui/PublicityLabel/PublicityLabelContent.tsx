import React from 'react';

interface PublicityLabelContentProps {
    smallText?: string
    bigText: string
    bold?: Boolean
    extrabold?: Boolean
    small?: Boolean
}

const PublicityLabelContent: React.FC<PublicityLabelContentProps> = ({
    smallText, bigText, bold, small, extrabold
}: PublicityLabelContentProps) => {
  return (
    <span className="flex flex-col text-[.8rem] text-center">
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