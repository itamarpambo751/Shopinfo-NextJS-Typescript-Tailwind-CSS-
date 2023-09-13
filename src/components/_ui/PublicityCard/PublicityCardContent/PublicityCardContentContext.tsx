import React from "react";

interface PublicityCardContentContextProps {
    resize: Boolean
}
const PublicityCardContentContext =React.createContext({ resize: false })

export default PublicityCardContentContext