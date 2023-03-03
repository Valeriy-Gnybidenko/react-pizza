import Filter from '../components/Filter'
import IconArrowUp from '../components/icons/IconArrowUp'
import Items from '../components/Items'

const Home = () => {
  return (
    <>
      <section className="home-1">
        <div className="container home-1__wrapper">
          <div className="home-1__line"></div>
          <div className="home-1__menu">
            <div className="home-1__filter-wrapper">
              <Filter />
            </div>
            <button className="home-1__sort-btn">
              <span className="home-1__sort-arrow">
                <IconArrowUp />
              </span>
              <p className="home-1__sort-text">
                Сортування за:
                <span className="home-1__sort-name">популярністю</span>
              </p>
            </button>
          </div>
          <div className="home-1__content">
            <h2 className="home-1__title">Усі піци</h2>
            <div className="home-1__items-wrapper">
              <Items />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
