import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.wrapper}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                key={id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage} %</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default Statistics;
