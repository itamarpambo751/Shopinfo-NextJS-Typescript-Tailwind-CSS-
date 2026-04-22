import Link from "next/link"

export const HeaderListLinkList: React.FC<{ link: { url: string, link: string } }> = ({
    link
}) => {
    return(
        <li className="header-list-link relative group">
            <Link href={link.url} className="text-[0.9rem] font-semibold text-[var(--text-primary)] hover:text-[var(--red-color)] transition-colors duration-200 pb-1">
                {link.link}
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--red-color)] to-[var(--orange-color)] group-hover:w-full transition-all duration-300 rounded-full"></span>
        </li>
    )
}