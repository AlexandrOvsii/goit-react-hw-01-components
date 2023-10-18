function Statistics({ title, stats }) {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="wrapper">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className="item" style={{backgroundColor: getRandomHexColor()}}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage} %</span>
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
