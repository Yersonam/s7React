import { useState } from "react"

export const UseForm = (initialState={}) => {
  const [formValues, setFormValues] = useState(initialState);
  const handleInputChange=(e)=>{
    setFormValues({
        ...initialState,
        [e.target.name]:e.target.value
    })
  }
  const reset=()=>{
    setFormValues(initialState)
  }
  return [formValues,handleInputChange,reset];
}
