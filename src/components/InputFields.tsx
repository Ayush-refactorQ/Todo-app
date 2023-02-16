import React, { useRef } from 'react'
import "./styles.css"
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputFields = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className='input' onSubmit={(e) => { handleAdd(e), inputRef.current?.blur() }}>
            <input ref={inputRef} type="text" placeholder='Enter a task' className='input__box'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='Add' type='submit'>Add</button>
        </form>
    )
}

export default InputFields;