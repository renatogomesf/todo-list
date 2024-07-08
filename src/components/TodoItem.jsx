

const TodoItem = ({tarefas}) => {

    return (
        <>
            {tarefas.map((tarefa,index)=>{
                return (
                    <div className="card" key={index}>
                        <section className="tarefa">
                        <h3>{tarefa.titulo}</h3>
                        <p>{tarefa.descricao}</p>
                        </section>
                        <div>
                        <button className="deletar">Deletar</button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
 
export default TodoItem;