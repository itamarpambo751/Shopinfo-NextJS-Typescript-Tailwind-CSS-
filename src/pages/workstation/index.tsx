import { PublicityCardV6 } from '@/components/_ui/PublicityCard/v6';
import Render from '@/components/_ui/Render';
import React from 'react';

// import { Container } from './styles';

export default function page() {
  return <Render 
    banner_img="/assets/img/choosepc-gmer.webp"
    section='Home > Workstation'
    title="Workstation"
    subtitle="Seu novo ambiente de trabalho com tecnologia de ponta e computadores potentes para qualquer que seja a sua área de atuação. Busca um computador mais robusto e potente para trabalhos pesados? Não deixe de conferir a secção Workstation que estará disponível na Black Friday da Shopinfo!"
    paragraph="No mercado dos games há mais de 20 anos, a Shopinfo busca o melhor em termos de hardware e tecnologia para computadores. Com compromisso e"
    render_card={PublicityCardV6}
  />
}