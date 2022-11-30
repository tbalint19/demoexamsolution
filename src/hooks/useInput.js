import { useState } from "react"

export const useInput = (placeHolder) => {
    const [ value, setValue ] = useState("")

    const onChange = (e) => setValue(e.target.value)

    return {
        value,
        onChange,
        placeHolder
    }
}