import React from 'react';
import { Hr } from '..';

// import { Container } from './styles';
interface InterTripleNavigationProps {
    labels: string[]
}

const InterTripleNavigation: React.FC<InterTripleNavigationProps> = ({
    labels
}: InterTripleNavigationProps) => {
  return (
    <div className="w-[50%] m-auto mt-14 flex justify-between items-center">
        <label className="relative">
            <span className="border border-[var(--red-color)] cursor-pointer w-16 h-16 rounded-full flex justify-center items-center bg-[var(--red-color)]">
                1
            </span>
            <small className="absolute top-16 left-[-15%] mt-3 w-20 text-center">
                { labels[0] }
            </small>
        </label>
        <Hr className="w-[25%]"/>
        <label className="relative">
            <span className="border border-[var(--border-color)] cursor-pointer w-16 h-16 rounded-full flex justify-center items-center">
                2
            </span>
            <small className="absolute top-16 left-[-15%] mt-3 w-20 text-center">
                { labels[1] }
            </small>
        </label>
        <Hr className="w-[25%]"/>
        <label className="relative">
            <span className="border border-[var(--border-color)] cursor-pointer w-16 h-16 rounded-full flex justify-center items-center">
                3
            </span>
            <small className="absolute top-16 left-[-15%] mt-3 w-20 text-center">
                { labels[2] }
            </small>
        </label>
    </div>
  )
}

export default InterTripleNavigation;