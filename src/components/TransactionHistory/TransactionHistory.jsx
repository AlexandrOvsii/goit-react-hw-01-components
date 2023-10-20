import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead className={css.transactionHeader}>
          <tr className={css.transactionHeader}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.transactionItem}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css[type]}>
                <td className={css.bodyType}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;
