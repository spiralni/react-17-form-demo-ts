import { MouseEvent, ChangeEvent, useState, FormEvent } from "react"

interface IFormInput {
    firstName: string,
    lastName: string
}

const ControlledForm = () => {
    const [values, setValues] = useState<IFormInput>({
        firstName: 'Carlos',
        lastName: 'Santana'
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
        <input type="text" name="firstName" 
            value={values.firstName}
            onChange={handleChange} />
        <br />
        <input type="text" name="lastName" 
            value={values.lastName}
            onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
    </form>
}

export default ControlledForm