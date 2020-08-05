import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHWtLMWdj5avg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=J6WyRIBaUiYi0CVKKS4J_wM2xhmiMyhIM46TZfl8IRI" alt="Imagem Professor" />
            <div>
              <strong>Thiago do Carmo Nunes</strong>
              <span>Malandragem</span>
            </div>
          </header>

          <p>Entuasiasta de Invenção de Moda.
            <br /><br />
            Profissional extremamente crítico e que busca propósito no que faz. Busco equipes tecnicamente fortes e que possa ter espaço para desenvolver inovações de mercado. Anseio em me tornar um líder técnico e que eu possa ser reconhecido como tal pela equipe. Busco me formar como pesquisador no setor privado.
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 100</strong>
            </p>
            <button type="button">
              Entrar em Contato
              <img src={whatsappIcon} alt="WhatsApp"/>
            </button>
          </footer>
        </article>
  );
};

export default TeacherItem;