const Filter = () => {
  return (
    <>
      <ul className="filter">
        <li className="filter__li">
          <button className="filter__btn">Усі</button>
        </li>
        <li className="filter__li">
          <button className="filter__btn">М'ясні</button>
        </li>
        <li className="filter__li">
          <button className="filter__btn">Вегетаріанські</button>
        </li>
        <li className="filter__li">
          <button className="filter__btn">Гриль</button>
        </li>
        <li className="filter__li">
          <button className="filter__btn">Гострі</button>
        </li>
        <li className="filter__li">
          <button className="filter__btn">Закрита</button>
        </li>
      </ul>
    </>
  )
}

export default Filter
