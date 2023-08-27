import { createContext } from "react";

interface PublicityCardContentContextProps {
  resize: Boolean
}
const PublicityCardContentContextPropsValues = {
	resize: false
}
const PublicityCardContentContext = createContext<PublicityCardContentContextProps>(PublicityCardContentContextPropsValues)

export default PublicityCardContentContext