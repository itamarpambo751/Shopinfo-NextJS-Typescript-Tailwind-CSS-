import React, { useState } from "react";
import {
    ImCheckboxUnchecked,
    ImCheckboxChecked
} from "react-icons/im"

interface ChevronChecsProps {
    span: string
}

export const ChevronChecks: React.FC<ChevronChecsProps> = ({
    span
}) => {
    const [checkBoxIsCheked, setCheckBoxIsChecked] = useState<Boolean>(false)
    return (
        <li className="cursor-pointer mb-2 rounded-md bg-[var(--gray)] px-3 py-2 text-[var(--text-light)] flex items-center justify-start gap-2" 
            onClick={() => setCheckBoxIsChecked(!checkBoxIsCheked)}>
            <i className="text-[var(--red-text-color)]">
                {checkBoxIsCheked ? (
                    <ImCheckboxChecked />
                ):(
                    <ImCheckboxUnchecked />
                )}
            </i>
            <span className="text-[13px]">{span}</span>
        </li>
    )
}