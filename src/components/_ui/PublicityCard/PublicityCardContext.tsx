import React from 'react'

interface PublicityCardContextProps {
    resize: Boolean
}

const PublicityCardRootContext = React.createContext({resize: false})

export default PublicityCardRootContext