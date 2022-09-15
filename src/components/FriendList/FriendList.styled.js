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
background-color: white;
margin-top: 10px;
box-shadow: 5px 5px 5px grey;
padding-left: 10px;
`

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius:50%;
background-color: ${bgColorIsOnline};
`
export const FriendImg = styled.img`
width: 50px;
height: 50px;
margin: 10px;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

export const FriendName = styled.p`
font-weight: 600;
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