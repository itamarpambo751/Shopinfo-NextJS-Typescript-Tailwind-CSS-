import React from 'react';
import { PublicityCard, PublicityLabel, Section } from '../_ui';
import { BsAlarm } from 'react-icons/bs';
import { Truck } from 'phosphor-react';

const Oferts: React.FC = () => {

  const settings = [
    { imgUrl: './assets/icons/processor.png', setting:'Ryzen 5 5600G' },
    { imgUrl: './assets/icons/memoria.png', setting:'16GB' },
    { imgUrl: './assets/icons/ssd.png', setting:'240GB' }
  ]

  return (
    <Section.Root>
        <Section.Content>

            <div className="flex justify-between items-center">
              <h1 className="text-[1.9rem] font-bold">
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

            {/**All Publicities Oferts */}
            <div className="grid grid-cols mt-4 gap-4 max-md:flex max-md:flex-col">

              <PublicityCard.Root id='1' >
                <div>
                  <PublicityCard.Image url="./assets/img/1(2).png"/>
                </div>
                
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

              <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
                <PublicityCard.Root id='2' resize>
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

                <PublicityCard.Root id='3' resize>
                  <PublicityCard.Image url="./assets/img/1(1).png"/>
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
              </div>
            </div>

            <div className="grid grid-cols mt-4 gap-4 max-md:flex max-md:flex-col">

              <PublicityCard.Root id='4'>
                <PublicityCard.Image url="./assets/img/1(3).png"/>
                <PublicityCard.Content.Root>
                  <div className='mb-12'>
                    <PublicityLabel.Root free>
                      {/* <PublicityLabel.Icon icon={Truck}/> */}
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

              <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
                <PublicityCard.Root id='5' resize>
                  <PublicityCard.Image url="./assets/img/3.png"/>
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

                <PublicityCard.Root id='6' resize>
                  <PublicityCard.Image url="./assets/img/1(18).png"/>
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
              </div>
            </div>
        </Section.Content>
      </Section.Root>
  )
}

export default Oferts;