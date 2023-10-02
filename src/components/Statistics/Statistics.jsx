import { StatisticsCreateMarkup } from 'components/Statistics/StatisticsCreateMarkup';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ events, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statsList}>
        {events.map(({ id, label, percentage }) => (
          <StatisticsCreateMarkup
            key={id}
            id={id}
            label={label}
            percentage={percentage}
            title={title}
          />
        ))}
      </ul>
    </section>
  );
};
