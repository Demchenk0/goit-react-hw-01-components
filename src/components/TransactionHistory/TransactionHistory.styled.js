import styled from '@emotion/styled';

export const TableHistory = styled.table`
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    font-family: ${props => props.theme.fonts.body};
font-size: ${props => props.theme.space[4]}px;
border-spacing: 0;
text-align: center;
padding-top: ${props => props.theme.space[4]}px;
`
export const TableTh = styled.th`
background: ${props => props.theme.colors.mint};
color: ${props => props.theme.colors.white};
text-shadow: 0 1px 1px #2D2020;
padding-top: ${props => props.theme.space[3]}px;
padding-right: ${props => props.theme.space[4]}px;
padding-bottom: ${props => props.theme.space[3]}px;
padding-left: ${props => props.theme.space[4]}px;
`
export const TableTd = styled.td`
padding-top: ${props => props.theme.space[3]}px;
padding-right: ${props => props.theme.space[4]}px;
padding-bottom: ${props => props.theme.space[3]}px;
padding-left: ${props => props.theme.space[4]}px;
background:  ${props => props.theme.colors.beige};
`
export const TableTr = styled.tr`
font-weight: ${props => props.theme.fontWeights.bold};`



