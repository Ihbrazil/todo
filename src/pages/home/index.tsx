import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

interface Tarefa {
  id: number
  titulo: string
  categoria: string
  data: string
  descricao: string
}

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: 1, titulo: 'Tarefa 1', categoria: 'Categoria 1', data: '23/10/2022', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum pharetra est in efficitur' },
    { id: 2, titulo: 'Tarefa 2', categoria: 'Categoria 2', data: '25/10/2022', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum pharetra est in efficitur' }
  ])

  const [form, setForm] = useState({
    titulo: '',
    categoria: '',
    data: '',
    descricao: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.titulo) return
    const novaTarefa: Tarefa = { id: Date.now(), ...form }
    setTarefas([novaTarefa, ...tarefas])
    setForm({ titulo: '', categoria: '', data: '', descricao: '' })
  }

  const excluirTarefa = (id: number) => {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  return (
    <div className="home-container">
      {/* Coluna Esquerda: Cadastro */}
      <div className="card-cadastro">
        <div>
          <h2>Cadastrar Tarefa</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" placeholder="Título" 
              value={form.titulo} onChange={e => setForm({...form, titulo: e.target.value})}
              required
            />
            <select 
              value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})}
            >
              <option value="">Categoria</option>
              <option value="Categoria 1">Categoria 1</option>
              <option value="Categoria 2">Categoria 2</option>
            </select>
            <input 
              type="text" placeholder="Data (ex: 23/10/2022)" 
              value={form.data} onChange={e => setForm({...form, data: e.target.value})}
            />
            <input 
              type="text" placeholder="Descrição" 
              value={form.descricao} onChange={e => setForm({...form, descricao: e.target.value})}
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className="link-como-usar">
          <Link to="/como-usar">Como usar</Link>
        </div>
      </div>

      {/* Coluna Direita: Listagem */}
      <div className="card-listagem">
        <div>
          <div className="listagem-header">
            <h3>Minhas Tarefas</h3>
            <span>Total: {tarefas.length} tarefas</span>
          </div>
          
          <div className="tarefas-list">
            {tarefas.map(tarefa => (
              <div key={tarefa.id} className="tarefa-item">
                <div className="tarefa-topo">
                  <div>
                    <h4>{tarefa.titulo}</h4>
                    <span>{tarefa.categoria}</span>
                  </div>
                  <div className="tarefa-acoes">
                    <span>{tarefa.data}</span>
                    <button className="btn-editar">✏️</button>
                    <button onClick={() => excluirTarefa(tarefa.id)} className="btn-excluir">🗑️</button>
                  </div>
                </div>
                <p>{tarefa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}