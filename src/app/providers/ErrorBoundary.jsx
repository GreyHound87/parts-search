import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <p role="alert">
          Что-то пошло не так. Обновите страницу и попробуйте ещё раз.
        </p>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
