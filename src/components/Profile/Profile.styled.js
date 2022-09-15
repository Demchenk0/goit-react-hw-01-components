import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

export const ProfileDescription = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.space[4]}px;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  border: 1px solid;
`;

export const ProfileName = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
`;
export const ProfileTag = styled.p`
  color: ${props => props.theme.colors.grey};
`;
export const ProfileList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.azure};
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
  text-align: center;
  border: 1px solid grey;
  padding: 20px 10px;
`;

export const ProfileText = styled.span`
  color: ${props => props.theme.colors.gray};
`;
export const ProfileQuantity = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;
