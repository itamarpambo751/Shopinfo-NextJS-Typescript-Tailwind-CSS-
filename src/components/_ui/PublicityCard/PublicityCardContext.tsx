import { createContext } from "react"

interface PublicityCardContextProps {
    resize: Boolean
}

const PublicityCardRootContext = createContext<PublicityCardContextProps>({
    resize: false
})

export default PublicityCardRootContext
