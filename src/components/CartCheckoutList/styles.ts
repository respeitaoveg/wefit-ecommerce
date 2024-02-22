import styled from "styled-components"

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px;
  align-items: start;
`

export const HeaderText = styled.div`
  color: #999999;
  font-weight: 700;
  font-size: 14px;
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px;
  align-items: center;
`

export const RowData = styled.div`
  display: flex;
  align-items: center;
`
export const RowDataProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const RowDataProductDetailTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  `

export const RowDataProductDetailPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
`

export const RowDataAction = styled.div`
  display: flex;
  justify-content: end;
`

export const TrashAction = styled.div`
  cursor: pointer;
`