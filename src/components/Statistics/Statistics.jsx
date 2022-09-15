import PropTypes from 'prop-types';
import {StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage} from "./Statistics.styled"
import {getRandomHexColor} from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsItem key={id}
                            bgColor={getRandomHexColor()}>
                            <StatisticsLabel>{label}</StatisticsLabel>
                            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
                        </StatisticsItem>
                    )
                })}
            </StatisticsList>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
    Statistics: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
            stats: {
                id: PropTypes.number.isRequired, 
                label: PropTypes.string.isRequired,
                percentage: PropTypes.string.isRequired,
            },
        }),
    ),
}

