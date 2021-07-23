import { MouseEvent, ChangeEvent, useState, FormEvent } from "react"

interface IFormInput {
    firstName: string,
    lastName: String
}

const UncontrolledForm = () => {
    const [values, setValues] = useState<IFormInput>({
        firstName: '',
        lastName: ''
    })
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`${values.firstName} ${values.lastName}`)
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={handleChange} />
        <input type="text" name="lastName" onChange={handleChange} />
        <button type="submit">Submit</button>
    </form>
}

export default UncontrolledForm