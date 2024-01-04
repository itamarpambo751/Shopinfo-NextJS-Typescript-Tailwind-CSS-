import React from 'react';
import { PublicityCard, PublicityLabel, Section } from '../_ui';
import { BsAlarm } from 'react-icons/bs';
import { Truck } from 'phosphor-react';
import { PublicityCardV1 } from '../_ui/PublicityCard/v1';
import { PublicityCardV4 } from '../_ui/PublicityCard/v4';

const Oferts: React.FC = () => {


  return (
    <Section.Root>
        <Section.Content>
            <div className="flex justify-between max-[1175px]:flex-col max-[1175px]:justify-start gap-3 items-center max-md:items-start max-md:px-10">
              <h1 className="text-[1.9rem] font-bold max-md:text-[1.6rem] max-md:leading-7">
                PC Gamer Barato! Só no Agosto Gamer da Shopinfo.
              </h1>
              <PublicityLabel.Root expires>
                <PublicityLabel.Icon icon={BsAlarm}/>
                <PublicityLabel.Content
                  bigText="27D 14:54:32"
                  smallText="Ofertas expiram em"
                />
              </PublicityLabel.Root>
            </div>
            <div className="grid grid-cols max-[1365px]:flex max-[1365px]:flex-col mt-4 gap-4 max-md:px-10">
              <PublicityCardV1 />
              <div className="grid grid-cols-2 gap-4 max-[675px]:flex max-[675px]:flex-col">
                <PublicityCardV4 />
                <PublicityCardV4 />
              </div>
            </div>
            <div className="grid grid-cols max-[1365px]:flex max-[1365px]:flex-col mt-4 gap-4 max-md:px-10">
              <PublicityCardV1 />
              <div className="grid grid-cols-2 gap-4 max-[675px]:flex max-[675px]:flex-col">
                <PublicityCardV4 />
                <PublicityCardV4 />
              </div>
            </div>
        </Section.Content>
      </Section.Root>
  )
}

export default Oferts;