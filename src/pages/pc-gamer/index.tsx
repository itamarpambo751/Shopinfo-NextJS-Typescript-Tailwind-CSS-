import { PublicityCardV7 } from "@/components/_ui/PublicityCard/v7";
import Render from "@/components/_ui/Render";

export default function page() {
  return <Render 
    banner_img="/assets/img/choosepc-gmer.webp"
    section='Home > Computadores Gamer'
    title="PC Gamer"
    subtitle="A Nova era de PC Gamer chegou! Teste as suas Habilidades e jogue com um Neologic Gamer."
    paragraph="No mercado dos games há mais de 20 anos, a Shopinfo busca o melhor em termos de hardware e tecnologia para computadores. Com compromisso e"
    render_card={PublicityCardV7}
  />
}