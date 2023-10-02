import { TransactionHistoryCreateMarkup } from 'components/TransactionHistory/TransactionHistoryCreateMarkup';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ events }) => {
  return (
    <table class={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {events.map(({ id, type, amount, currency }) => (
        <TransactionHistoryCreateMarkup
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  );
};
