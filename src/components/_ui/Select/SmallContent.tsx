interface SmallContentProps {
    text: string
}

const SmallContent: React.FC<SmallContentProps> = ({ text }: SmallContentProps) => {
    return (
        <small className="select-small ml-4 font-extralight text-[.8rem]">
            {text}
        </small>
    )
}

export default SmallContent