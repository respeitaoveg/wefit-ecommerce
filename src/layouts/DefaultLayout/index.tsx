import { ReactNode } from "react";
import { DefaultContainer } from "./styles";


interface DefaultProps {
  children: ReactNode
}


export default function DefaultLayout({ children }: DefaultProps) {
  return <DefaultContainer>
    {children}
  </DefaultContainer>
}