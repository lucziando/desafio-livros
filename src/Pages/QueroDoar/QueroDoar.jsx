import S from "./querodoar.module.scss"
import livro from '../../assets/Imagens/Vector.png'

import axios from "axios"
import { useState } from "react";

export default function QueroDoar(){


    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria]= useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async() => {

        const urlApi = "https://m2desafio2.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url,
        }


        await axios.post(urlApi,dadosEnviar)

        alert("Livro Enviado")

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }


    const capturaTitulo = (e)=> {
        setTitulo(e.target.value)
        console.log(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImagem_url(e.target.value);
    }
    return(
    //    <h2>EU QUERO DOAR</h2>
    <section className={S.Principal}>
        <section className={S.Conteiner}>
            <h2>Por favor, preencha o formulário com as suas informações e as informaçoões do livro</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <img src={livro} alt=" Ilustração de um livro" />
                    <h3>Informações do Livro</h3>
                </div>
                <input type="text" placeholder="Titulo" onChange={capturaTitulo} value={titulo}/>
        <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
        <input type="text" placeholder="Autor"
        onChange={capturaAutor} value={autor}/>
        <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url}/>
        <input onClick={enviarDados} type="submit"  value="Doar"/>
            </form>
        </section>
    </section>
    )
}