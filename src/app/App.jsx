import { SearchPage } from '../pages/search'
import { ErrorBoundary } from './providers'

function App() {
  return (
    <ErrorBoundary>
      <SearchPage />
    </ErrorBoundary>
  )
}

export { App }
