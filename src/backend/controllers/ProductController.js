import { Response } from 'miragejs'

export const getAllProductsHandler = function () {
  return new Response(200, {}, { products: this.db.products })
}
