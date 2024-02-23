import styled from "styled-components"

export const QuantityInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
`

export const QuantityInputButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const QuantityRealInput = styled.input.attrs({ type: "text" })`
  width: 62px;
  display: flex;
  flex-direction: row;
  gap: 11px;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  padding: 3.5px 0 3.5px 16px;
  color: #2F2E41;
  font-weight: 400;
  font-size: 14px;


  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 40px;
  }
`