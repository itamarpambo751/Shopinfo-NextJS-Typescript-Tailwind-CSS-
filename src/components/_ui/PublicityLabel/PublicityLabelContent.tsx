import React from 'react';
import { twMerge } from 'tailwind-merge'

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
					data-small={small}
					data-bold={bold}
					data-extrabold={extrabold}
          className={twMerge("text-[1rem] data-[small=true]:text-[.87rem] data-[bold=true]:font-bold data-[extrabold=true]:font-extrabold")}>
            { bigText }
          </p>
    </span>
  )
}

export default PublicityLabelContent;