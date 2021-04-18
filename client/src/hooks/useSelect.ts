import { useState } from 'react'

export const useSelect = (initialState: string) => {
  const [selectedValue, setSelectedValue] = useState(initialState)
  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setSelectedValue(event.target.value as string)
  }

  return {
    value: selectedValue,
    onChange: handleChange,
  }
}
