import { Truck } from "phosphor-react"
import PublicityCard from ".."
import { PublicityLabel } from "../.."

export const PublicityCardV1: React.FC = () => 
<PublicityCard.Root id='1' className="p-5 h-full">
    <PublicityCard.Image url="./assets/img/1(2).png"/>
    <PublicityCard.Content.Root>
      <div className='mb-12'>
        <PublicityLabel.Root free>
          <PublicityLabel.Icon icon={Truck}/>
          <PublicityLabel.Content
            bigText="FRETE GRÁTIS*" bold small
          />
        </PublicityLabel.Root>
        <PublicityLabel.Root>
          <PublicityLabel.Content
            bigText="-27%"
          />
        </PublicityLabel.Root>
      </div>
      <div className="space-y-3">
        <PublicityCard.Content.Stars value={246}/>
        <PublicityCard.Content.Product name="Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado..."/>
        <PublicityCard.Content.Description
          title="Ryzen 5 5600G"
          price="2.557,90"
          oldPrice="3.067,90"
          settings={[
            { imgUrl: './assets/icons/processor.png', setting:'Ryzen 5 5600G' },
            { imgUrl: './assets/icons/memoria.png', setting:'16GB' },
            { imgUrl: './assets/icons/ssd.png', setting:'240GB' }
          ]}
        />
      </div>
    </PublicityCard.Content.Root>
</PublicityCard.Root>