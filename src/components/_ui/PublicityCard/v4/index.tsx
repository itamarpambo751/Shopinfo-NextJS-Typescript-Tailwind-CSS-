import { BsAlarm } from "react-icons/bs";
import PublicityCard from "..";
import { PublicityLabel } from "../..";
import { Truck } from "phosphor-react";

const settings = [
    { imgUrl: './assets/icons/processor.png', setting:'Ryzen 5 5600G' },
    { imgUrl: './assets/icons/memoria.png', setting:'16GB' },
    { imgUrl: './assets/icons/ssd.png', setting:'240GB' }
]
export const PublicityCardV4: React.FC = () =>
<PublicityCard.Root id='2' resize className="p-5">
    <div className="w-[200px] flex gap-2">
        <PublicityLabel.Root free>
            <PublicityLabel.Icon icon={Truck}/>
        </PublicityLabel.Root>
        <PublicityLabel.Root>
           {/*  <PublicityLabel.Icon icon={BsAlarm}/> */}
                    <PublicityLabel.Content
                    bigText="-17%"
                    /* smallText="Ofertas expiram em" */
                    />
        </PublicityLabel.Root>
    </div>
    <PublicityCard.Image url="./assets/img/1(5).png"/>
    <PublicityCard.Content.Root>
        <div className="mt-10 space-y-3 relative">
            <PublicityCard.Content.Product name="Pc Gamer AMD Ryzen 5 5600G 16GB (Radeon Vega 7 Integrado) SSD 240GB, 500W 80 Plus, Neologic - NLI82731"/>
            <PublicityCard.Content.Description
                title="Ryzen 5 5600G"
                price="2.557,90"
                oldPrice="3.067,90"
                settings={settings}
            />
        </div>
    </PublicityCard.Content.Root>
</PublicityCard.Root>