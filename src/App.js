import { useState } from 'react'
import { useQuery } from 'react-query'

import { ProductCard } from './components/ProductCard'
import { Loader } from './components/Loader'
import { ProductModal } from './components/ProductModal'

import { getProducts } from './services/products'

import styles from './App.module.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [product, setProduct] = useState({})

  const { isLoading, data, error } = useQuery('products', getProducts)

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  const { products } = data

  const handleClick = (product) => {
    setProduct(product)
    setIsVisible(true)
  }

  const onHide = () => setIsVisible(false)

  return (
    <div className={styles.app}>
      <h1 className="mb-5 text-center">Welcome to Products Assignment</h1>
      <div className={styles.component}>
        {products.map(({ id, ...rest }) => (
          <ProductCard key={id} product={rest} handleClick={handleClick} />
        ))}
      </div>

      <ProductModal isVisible={isVisible} onHide={onHide} product={product} />
    </div>
  )
}

export default App
