import { OffersTable } from '../../../features/offers-table'
import { PartInput } from '../../../features/part-input'
import { useSearchPanel } from '../model/useSearchPanel.js'

function SearchPanel() {
  const { offers, handlePartSubmit } = useSearchPanel()

  return (
    <section>
      <PartInput onSubmit={handlePartSubmit} />
      <OffersTable offers={offers} />
    </section>
  )
}

export { SearchPanel }
