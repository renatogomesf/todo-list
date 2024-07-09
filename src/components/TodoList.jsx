import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useRef } from "react";

const TodoList = () => {

    const tituloRef = useRef()
    const descricaoRef = useRef()

    const [tarefas,setTarefas] = useState([])

    const handlePegarTarefa = ()=>{
        setTarefas((tarefas)=>{
            const tarefa = {
                titulo: tituloRef.current.value,
                descricao: descricaoRef.current.value
            }
            return [...tarefas,tarefa]
        })
    }

    return (
        <>
            <form id="form" onSubmit={(e)=>e.preventDefault()}>
                <section className="criarTarefa">
                    <label htmlFor="title">Título</label>
                    <input ref={tituloRef} type="text" name="title" id="title" placeholder="Digite aqui" />
                </section>

                <section className="criarTarefa">
                    <label htmlFor="description">Descrição</label>
                    <textarea ref={descricaoRef} name="description" id="description" placeholder="Digite aqui"></textarea>
                </section>

                <button className="btnAdicionar" onClick={handlePegarTarefa}>Adicionar</button>
            </form>

            <div className="tarefas">
                <TodoItem tarefas={tarefas} />
            </div>
        </>
    );
}
 
export default TodoList;