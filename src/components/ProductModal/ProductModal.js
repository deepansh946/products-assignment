import { Modal } from 'react-bootstrap'

const ProductModal = ({ isVisible, onHide, product }) => {
  const { name, description, price } = product
  return (
    <Modal
      show={isVisible}
      onHide={onHide}
      dialogClassName="modal-90w"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        <p>${price}</p>
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal
