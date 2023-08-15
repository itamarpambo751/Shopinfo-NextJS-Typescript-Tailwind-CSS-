import { createContext } from "react";

interface PublicityCardContentContextProps {
    resize: Boolean
}
const PublicityCardContentContext = createContext<PublicityCardContentContextProps>({ resize: false })

export default PublicityCardContentContext