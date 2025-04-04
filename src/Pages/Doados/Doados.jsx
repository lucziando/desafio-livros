import S from "./doados.module.scss"
import revolucao from "../../assets/Imagens/revolucao.webp"

import axios from "axios"
import { useState, useEffect } from "react";

export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://m2desafio2.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros();
    },[])
    
   return(
    <section className={S.Doados}>
        <h2>Livros doados</h2>
        <section className={S.Cards}>

        {livros.map((item)=>(
                <article>
                 <img className={S.Img} src={item.imagem_url} alt="" />
                 <h3>{item.titulo}</h3>
                  <p>{item.categoria}</p>
                  <p>{item.autor}</p>
                 </article>
                ))}

            <article>
             <img className={S.Img} src={revolucao} alt="Capa do livro A revoluão Dos Bichos" />

            <h3>A Revolução dos Bichos</h3>
            <p>George Orwell</p>
            <p>Ficção</p>
            </article>
         
        </section>
    </section>
   )
}