import S from "./doados.module.scss"
import revolucao from "../../assets/Imagens/revolucao.webp"

export default function Doados(){
    
   return(
    <section className={S.Doados}>
        <h2>Livros doados</h2>
        <section className={S.Cards}>
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