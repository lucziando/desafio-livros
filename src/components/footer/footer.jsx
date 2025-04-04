import S from "../footer/footer.module.scss"
import Facebook from "../../assets/Imagens/facebook.png"
import Twitter from "../../assets/Imagens/Twitter.png"
import Youtube from "../../assets/Imagens/Youtube.png"
import Linkedlin from "../../assets/Imagens/Linkedin.png"
import Instagran from "../../assets/Imagens/Instagram.png"

export default function footer(){
    return(
        <footer>
            <section className={S.Redes}>
            <h3>4002-8922</h3>
            <nav>
                <a href=""> <img src={Facebook} alt="Logo do Facebook"/> </a>
                <a href=""> <img src={Twitter} alt="Logo do Tiwitter"/> </a>
                <a href=""> <img src={Youtube} alt="Logo do Youtube"/> </a>
                <a href=""> <img src={Linkedlin} alt="Logo do Linkedin"/> </a>
                <a href=""> <img src={Instagran} alt="Logo do instagram"/> </a>
            </nav>
        </section>

        <section className={S.Texto}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
        </footer>
        
        
    )
}