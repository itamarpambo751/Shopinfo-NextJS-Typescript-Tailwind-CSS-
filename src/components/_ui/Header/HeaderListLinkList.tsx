import Link from "next/link"

export const HeaderListLinkList: React.FC<{ link: { url: string, link: string } }> = ({
    link
}) => {
    return(
        <li className="header-list-link relative">
            <Link href={link.url}>
                {link.link}
            </Link>
        </li>
    )
}