import styled from "styled-components"

export const DividerContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999999;
`

export default function Divider() {
  return <DividerContainer></DividerContainer>
}