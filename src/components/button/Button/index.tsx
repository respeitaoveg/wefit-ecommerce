import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonContainer, Text } from "./styles";


interface ButtonProps {
  children: ReactNode
  path: string
}

export default function Button({ children, path }: ButtonProps) {
  const navigate = useNavigate();

  return <ButtonContainer onClick={() => navigate(path)}>
    <Text>
      {children}
    </Text>
  </ButtonContainer>
}