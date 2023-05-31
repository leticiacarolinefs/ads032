import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import ContatosContext from '../contexts/ContatosContext'
import React from 'react'


export default function Novo() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { incluirContato } = useContext(ContatosContext)
    const navigate = useNavigate()

    function onSubmit(data) {
        incluirContato(data)
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="nome" id="nome" {...register("nome", { required: "Campo obrigatório" })} />
                {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            <div>
                <label htmlFor="telefone">Telefone</label>
                <input type="telefone" id="telefone" {...register("telefone", { required: "Campo obrigatório" })} />
                {errors.telefone && <p>{errors.telefone.message}</p>}
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>
    )
}