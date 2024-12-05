import S from "./querodoar.module.scss"
import livro from '../../assets/Imagens/Vector.png'

export default function QueroDoar(){
    return(
    //    <h2>EU QUERO DOAR</h2>
    <section className={S.Principal}>
        <section className={S.Conteiner}>
            <h2>Por favor, preencha o formulário com as suas informações e as informaçoões do livro</h2>
            <form action="">
                <div>
                    <img src={livro} alt=" Ilustração de um livro" />
                    <h3>Informações do Livro</h3>
                </div>
                <input type="text" placeholder="Titulo" />
                <input type="text" placeholder="Categoria" />
                <input type="text" placeholder="Autor" />
                <input type="text" placeholder="Link da Imagem" />
                <input type="submit" value="Doar"/>
            </form>
        </section>
    </section>
    )
}