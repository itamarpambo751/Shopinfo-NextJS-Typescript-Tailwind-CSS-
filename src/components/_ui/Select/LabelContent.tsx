
interface LabelContentProps {
    icon?: string
    text: string
}

const LabelContent: React.FC<LabelContentProps> = ({ icon, text }: LabelContentProps) => {
    return (
        <label htmlFor="video" className='flex items-center gap-2'>
            {icon && (
                <img src={icon} className="w-6"/>
            )}
            <span className="text-[1.1rem] font-bold">{text}</span>
        </label>
    )
}
export default LabelContent
