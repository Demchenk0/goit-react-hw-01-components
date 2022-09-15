import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;
export const StatisticsTitle = styled.h2`
  display: block;
  font-size: 1.2em;
  text-align: center;
  padding-top: 20px;
  font-weight: 700;
  color: grey;
  text-transform: uppercase;
  margin-top: 30px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: azure;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
  text-align: center;
  border: 1px solid grey;
  padding: 20px 10px;
  background-color: ${props => props.bgColor};
`;

export const StatisticsLabel = styled.span`
  color: white;
`;
export const StatisticsPercentage = styled.span`
  font-weight: 700;
  color: white;
  margin-top: 10px;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
