import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
     display: flex;
    flex-direction: column;
    text-align: center;
`;

export const FriendItem = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
width: 300px;
margin-left: auto;
margin-right: auto;
background-color: ${props => props.theme.colors.white};
margin-top: ${props => props.theme.space[3]}px;
box-shadow: 5px 5px 5px grey;
padding-left: ${props => props.theme.space[3]}px;
`

export const FriendStatus = styled.span`
    width: ${props => props.theme.space[4]}px;
    height: ${props => props.theme.space[4]}px;
    border-radius:${props => props.theme.borders.medium};
background-color: ${bgColorIsOnline};
`
export const FriendImg = styled.img`
width: ${props => props.theme.space[6]}px;
height: ${props => props.theme.space[6]}px;
margin: ${props => props.theme.space[4]}px;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

export const FriendName = styled.p`
font-weight: ${props => props.theme.fontWeights.bold};
`






export function bgColorIsOnline({ isOnline }) {
    switch (isOnline) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return "white"
    }
}