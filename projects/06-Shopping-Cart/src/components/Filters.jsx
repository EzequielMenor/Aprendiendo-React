import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilteredId = useId()
  const categoryFilteredId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">

      <div>
        <label htmlFor={minPriceFilteredId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilteredId}
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilteredId}>Categorias</label>
        <select id={categoryFilteredId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>

    </section>
  )
}