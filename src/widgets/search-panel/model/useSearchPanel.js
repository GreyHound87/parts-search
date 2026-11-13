import { useState } from 'react'

function useSearchPanel() {
  const [offers, setOffers] = useState([])

  function handlePartSubmit() {
    setOffers([])
  }

  return { offers, handlePartSubmit }
}

export { useSearchPanel }
