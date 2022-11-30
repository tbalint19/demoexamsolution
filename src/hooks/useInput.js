import { useState } from "react"

export const useInput = (placeholder) => {
    const [ value, setValue ] = useState("")

    const onChange = (e) => setValue(e.target.value)

    return {
        value,
        onChange,
        placeholder
    }
}