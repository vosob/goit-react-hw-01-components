import css from 'components/Statistics/Statistics.module.css';

export const StatisticsCreateMarkup = ({ label, percentage }) => {
  return (
    <li className={css.stats}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
