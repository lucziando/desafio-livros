import React from "react";
import Logo from "../../assets/Imagens/Logologo.png"
import Lupa from "../../assets/Imagens/lupa.png"
import S from "../header/header.module.scss"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";

export default function Header (){
  return (
    <BrowserRouter>
    <header>
     <section className={S.Logo}>
     <img src={Logo} alt="Imagem de um livro" />
     <h2>Livros Vai na web</h2>
     </section>

      <nav className={S.Nav}>
        <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="Doados">Livros Doados</Link></li>
        <li><Link to="QueroDoar">Quero Doar</Link></li>
        </ul>
      </nav>

      <section className={S.Pesquisa}>
          <input className={S.Input}
          type="text"
          placeholder="O que você procura?"/>
          
          <img src={Lupa} alt="Icone de lupa" />
          
        </section>
    </header>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/doados" element={<Doados/>}/>
      <Route path="/querodoar" element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}