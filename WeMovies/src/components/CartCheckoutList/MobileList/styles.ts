import styled from "styled-components"


export const RowDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

export const RowDetailHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 16px;
  `

export const RowDetailHeaderTitle = styled.div`
    color: #2F2E41;
    font-weight: 700;
    font-size: 14px;
  `

export const RowDetailHeaderPrice = styled.div`
    color: #2F2E41;
    font-weight: 700;
    font-size: 16px;
  `

export const RowDetailFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  `

export const RowDetailFooterResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
  `

export const RowDetailFooterResumeSubtotal = styled.div`
    color: #999999;
    font-weight: 700;
    font-size: 12px;
  `

export const RowDetailFooterResumePrice = styled.div`
    color: #2F2E41;
    font-weight: 700;
    font-size: 16px;
  `