import { BsFire } from "react-icons/bs";
import PublicityCard from "..";
import { PublicityLabel } from "../..";

export const PublicityCardV5: React.FC = () =>
<PublicityCard.Root id="1" resize className="p-5">
    <div className="flex justify-start items-center gap-2 mb-12">
        <PublicityLabel.Root expires>
        <PublicityLabel.Icon icon={BsFire}/>
        <PublicityLabel.Content bigText="14D 17:23:56" bold/>
        </PublicityLabel.Root>
        <PublicityLabel.Root>
        <PublicityLabel.Content bigText="-18%"/>
        </PublicityLabel.Root>
    </div>
    <PublicityCard.Image url="./assets/img/1(7).png"/>
    <PublicityCard.Content.Root>
        <div className="w-[100%] mt-8">
        <PublicityCard.Content.Product  name="Monitor Gamer Duex 27'' Full HD 1ms, 240, curvo, ip, freesyns" subtring={52} noBold/>
        </div>
        <br />
        <PublicityCard.Content.Price price="1.239,90" oldPrice="2.014,20" color/>
        <PublicityCard.Content.Stars value={28} left/>
    </PublicityCard.Content.Root>
</PublicityCard.Root>