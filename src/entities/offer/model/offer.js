/**
 * Позиция из goods[] в ответе API Favorit Parts.
 *
 * @typedef {Object} Offer
 * @property {string} name Название детали.
 * @property {string} manufacturer Производитель.
 * @property {WarehouseOffer[]} warehouses Офферы по складам.
 */

/**
 * Оффер одного склада. Цену и наличие берём отсюда
 *
 * @typedef {Object} WarehouseOffer
 * @property {string} warehouse
 * @property {number} price
 * @property {number} stock
 */

/**
 * Проверяет, что среди позиций есть хотя бы одно складское предложение.
 *
 * @param {Offer[]} offers
 * @returns {boolean}
 */
function hasOffers(offers) {
  return offers.some((offer) => offer.warehouses.length > 0)
}

export { hasOffers }
