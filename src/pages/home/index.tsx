import { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import "./styles.css";

interface Task {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
}

const STORAGE_KEY = "tasks";

export default function Home() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [id, setId] = useState("");

  const [tarefas, setTarefas] = useState<Task[]>([]);

  // Carregar tarefas ao iniciar
  useEffect(() => {
  const tasksSalvas = localStorage.getItem(STORAGE_KEY);

  if (tasksSalvas) {
    setTarefas(JSON.parse(tasksSalvas));
  } else {
      const tarefasIniciais: Task[] = [
        {
          id: "1",
          title: "Tarefa exemplo",
          category: "Trabalho",
          description: "Descrição de teste",
          date: "2023-05-03",
        }
      ];

      setTarefas(tarefasIniciais);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefasIniciais));
    }
  }, []);


  function limparCampos() {
    setTitulo("");
    setCategoria("");
    setData("");
    setDescricao("");
    setId("");
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id) {
      editTask();
      return;
    }

    const novaTarefa: Task = {
      id: String(Date.now()),
      title: titulo,
      category: categoria,
      date: data,
      description: descricao,
    };

    const copia = [...tarefas, novaTarefa];

    setTarefas(copia);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(copia));

    limparCampos();
  }

  function editTask() {
    const posicao = tarefas.findIndex((tarefa) => tarefa.id === id);

    const copia = [...tarefas];

    copia[posicao] = {
      id,
      title: titulo,
      category: categoria,
      date: data,
      description: descricao,
    };

    setTarefas(copia);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(copia));

    limparCampos();
  }

  function apagarTarefa(id: string) {
    const filtrado = tarefas.filter((tarefa) => tarefa.id !== id);

    setTarefas(filtrado);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtrado));
  }

  function carregarParaEdicao(tarefa: Task) {
    setTitulo(tarefa.title);
    setCategoria(tarefa.category);
    setData(tarefa.date);
    setDescricao(tarefa.description);
    setId(tarefa.id);
  }

  return (
    <div className="container_home">
      <div className="form">
        <form onSubmit={submitForm}>
          <h2>Cadastrar tarefa</h2>

          <input
            value={titulo}
            placeholder="Título"
            onChange={(e) => setTitulo(e.target.value)}
          />

          <input
            value={categoria}
            placeholder="Categoria"
            onChange={(e) => setCategoria(e.target.value)}
          />

          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />

          <textarea
            value={descricao}
            placeholder="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button type="submit">
            {id ? "Salvar edição" : "Cadastrar"}
          </button>
        </form>

        {/* LINK COMO USAR */}
        <div className="link-como-usar">
          <a href="/how-use">Como usar o aplicativo</a>
        </div>
      </div>

      <div className="lista">
        <h2>Tarefas cadastradas</h2>

        {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}

        {tarefas.map((tarefa) => (
          <div key={tarefa.id} className="item">
            <h3>{tarefa.title}</h3>
            <p><strong>Categoria:</strong> {tarefa.category}</p>
            <p><strong>Data:</strong> {tarefa.date}</p>
            <p>{tarefa.description}</p>

            <div className="actions">
              <button onClick={() => carregarParaEdicao(tarefa)}>
                <MdEdit size={22} />
              </button>

              <button onClick={() => apagarTarefa(tarefa.id)}>
                <MdDelete size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}