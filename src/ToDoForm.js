import {useState} from "react";

export default function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput}
            type='text'
            onChange={handleChange}
            placeholder = "Введите значение"
            />
            <button>Добавить</button>
        </form>
    )
}