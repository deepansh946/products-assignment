import React from 'react'
import { Card, Badge } from 'react-bootstrap'

const ProductCard = ({ product, handleClick }) => {
  const { image_url, name, description, price, category } = product

  return (
    <Card
      className="p-4 bg-white shadow-sm cursor-pointer"
      onClick={() => handleClick(product)}
    >
      <Card.Img variant="top" src={image_url} />
      <Card.Body className="pt-4">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-truncate">{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Badge bg="dark">{category}</Badge>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
