import { ReactNode } from "react"
import { ButtonContainer, Text } from "./styles";


interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return <ButtonContainer onClick={() => onClick()}>
    <Text>
      {children}
    </Text>
  </ButtonContainer>
}