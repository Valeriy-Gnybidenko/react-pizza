import Filter from '../components/Filter'
import Items from '../components/Items'
import Sort from '../components/Sort'

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
            <div className="home-1__sort-wrapper">
              <Sort />
            </div>
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
