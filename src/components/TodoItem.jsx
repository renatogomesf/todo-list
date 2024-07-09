

const TodoItem = ({tarefas}) => {

    let dados = tarefas

    const deletar = (id)=>{

        const tarefassss = []

        dados.find((tarefa,index)=>{
            if(index == id){
                alert("Tarefa deletada")
            }else{
                tarefassss.push(tarefa)
            }
        })

        dados = []
        dados.push(...tarefassss)
        console.log(dados);

    }

    console.log(dados);

    return (
        <>
            {dados.map((tarefa,index)=>{
                return (
                    <div className="card" id={index} key={index}>
                        <section className="tarefa">
                            <h3>{tarefa.titulo}</h3>
                            <p>{tarefa.descricao}</p>
                        </section>
                        <div>
                            <button className="deletar" onClick={e => deletar(e.target.parentNode.parentNode.id)}>Deletar</button>
                        </div>
                    </div>
                    
                )
            })}
        </>
    );
}
 
export default TodoItem;