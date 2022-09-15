import PropTypes from 'prop-types';
import {TableHistory, TableTh, TableTd, TableTr} from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactions }) => {
    return (
        <TableHistory>
            <thead>
                <TableTr>
                    <TableTh>Type</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Currency</TableTh>
                </TableTr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <TableTr key={id}>
                            <TableTd>{type}</TableTd>
                            <TableTd>{amount}</TableTd>
                            <TableTd>{currency}</TableTd>
                        </TableTr>
                    );
                })}
            </tbody>
        </TableHistory>
    );
};

TransactionHistory.propTypes = {
    TransactionHistory: PropTypes.arrayOf(
        PropTypes.exact({
            transactions: {
                id: PropTypes.string.isRequired, 
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
            },
        }),
    ),
};

// ! Проверить PropTypes !!!!!!!!!!!
