import { hasOffers } from '../../../entities/offer'

function OffersTable({ offers }) {
  if (!hasOffers(offers)) {
    return <p>Введите номер детали, чтобы увидеть предложения</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Деталь</th>
          <th scope="col">Производитель</th>
          <th scope="col">Склад</th>
          <th scope="col">Цена</th>
          <th scope="col">Наличие</th>
        </tr>
      </thead>
      <tbody>
        {offers.flatMap((offer) =>
          offer.warehouses.map((warehouseOffer) => (
            <tr
              key={`${offer.name}-${offer.manufacturer}-${warehouseOffer.warehouse}`}
            >
              <td>{offer.name}</td>
              <td>{offer.manufacturer}</td>
              <td>{warehouseOffer.warehouse}</td>
              <td>{warehouseOffer.price}</td>
              <td>{warehouseOffer.stock}</td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  )
}

export { OffersTable }
