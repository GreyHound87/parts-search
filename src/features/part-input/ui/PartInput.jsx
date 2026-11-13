import { Button, TextField } from '../../../shared/ui'
import { usePartInput } from '../model/usePartInput.js'

function PartInput({ onSubmit }) {
  const { value, error, handleChange, handleSubmit } = usePartInput(onSubmit)

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="part-number"
        name="partNumber"
        label="Номер детали"
        value={value}
        error={error}
        onChange={handleChange}
      />
      <Button type="submit">Найти</Button>
    </form>
  )
}

export { PartInput }
