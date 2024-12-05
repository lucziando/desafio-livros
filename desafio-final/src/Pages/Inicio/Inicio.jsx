 import S from "./inicio.module.scss"
import icon1 from "../../assets/Imagens/Icon1community.png"
import icon2 from "../../assets/Imagens/Icon2reading.png"
import icon3 from "../../assets/Imagens/Icon3transform.png"
import icon4 from "../../assets/Imagens/Icon4balance.png"

export default function Inicio(){
    return(
 //       <h2>EU SOU O INICIO</h2>
 <main>
    <section className={S.Post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={S.Doar}>
            <div>
                <h2>Por que devo doar?</h2>
            </div>
        </section>
        <section className={S.Cards}>
            <article>
                <img src={icon1} alt="Ilustração que representa o conceito de uma comunidade" />
                <p>Oferece livros a quem não tem acesso, ajudando a reduzir a eclusão social.</p>
            </article>
            <article>
                <img src={icon2} alt="Ilustração de uma pessoa com um livro aberto" />
                <p>Estimula o hábito de leitura e o aprendizado contínuo</p>
            </article>
            <article>
                <img src={icon3} alt="Ilustração representando inuão e força" />
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas</p>
            </article>
            <article>
                <img src={icon4} alt="Ilustração de uma balança" />
                <p>Garante que todos, independente de sua condição, tenham oportunidades de aprendizado</p>
            </article>

        </section>
 </main>

    )
}