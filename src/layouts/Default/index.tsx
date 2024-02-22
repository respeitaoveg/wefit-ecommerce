import { ReactNode } from "react";
import { DefaultContainer } from "./styles";


interface DefaultProps {
  children: ReactNode
}


export default function Default({ children }: DefaultProps) {
  return <DefaultContainer>
    {children}
  </DefaultContainer>
}