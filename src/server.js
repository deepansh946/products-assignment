import { Server, Model, RestSerializer } from 'miragejs'

import { getAllProductsHandler } from './backend/controllers/ProductController'
import { products } from './backend/db/products'

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
    },

    seeds(server) {
      server.logging = false
      products.forEach((item) => {
        server.create('product', { ...item })
      })
    },

    routes() {
      this.namespace = 'api'
      this.get('/products', getAllProductsHandler.bind(this))
    },
  })
}
