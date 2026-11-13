import { useState } from 'react'

function usePartInput(onSubmit) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function handleChange(event) {
    setValue(event.target.value)
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const partNumber = value.trim()

    if (!partNumber) {
      setError('Введите номер детали')
      return
    }

    onSubmit(partNumber)
  }

  return { value, error, handleChange, handleSubmit }
}

export { usePartInput }
