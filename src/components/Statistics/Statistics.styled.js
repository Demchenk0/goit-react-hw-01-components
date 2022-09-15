import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: ${props => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;
export const StatisticsTitle = styled.h2`
  display: block;
  font-size: ${props => props.theme.fontSizes.ms}px;
  text-align: center;
  padding-top: ${props => props.theme.space[4]}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.grey};
  text-transform: uppercase;
  margin-top: ${props => props.theme.space[5]}px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.azure};
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
  text-align: center;
  border: 1px solid grey;
  padding-top: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[3]}px;
  background-color: ${props => props.bgColor};
`;

export const StatisticsLabel = styled.span`
  color: ${props => props.theme.colors.white};
`;
export const StatisticsPercentage = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-top: ${props => props.theme.space[3]}px;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
