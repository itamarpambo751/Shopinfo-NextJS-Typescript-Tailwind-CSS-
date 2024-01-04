import React from 'react';
import { Select } from '../_ui';

// import { Container } from './styles';

const FindYourPC : React.FC = () => {
  return (
    <section className="w-[100%] h-[200px] max-[953px]:h-[650px] shadow-[0px_0px_5px_3px_rgba(0,0,0,0.5)] mt-[100px]">
        <form className="w-[80%] m-auto p-7 max-[1135px]:w-[95%]">
          <div className="text-center mb-5 max-[953px]:text-left max-[953px]:pl-5">
            <h1 className="text-[1.4rem] font-bold">Encontre seu PC Gamer Ideal</h1>
          </div>
          <div className="w-[95%] flex gap-5 items-center m-auto max-[953px]:flex-col">
            <div className='w-[20%] max-[953px]:w-[95%]'>
              <Select.Root>
                <Select.Label text='Placa de vídeo' icon="./assets/icons/memory.png"/>
                <Select.Select options={['Todas as opções']}/>
                <Select.Small text='como escolher?'/>
              </Select.Root>
            </div>
            <div className='w-[20%] max-[953px]:w-[95%]'>
              <Select.Root>
                <Select.Label text='Processador' icon="./assets/icons/processor.png"/>
                <Select.Select options={['Todas as opções']}/>
                <Select.Small text='como escolher?'/>
              </Select.Root>
            </div>
            <div className='w-[20%] max-[953px]:w-[95%]'>
              <Select.Root>
                <Select.Label text='Memória' icon="./assets/icons/memory.png"/>
                <Select.Select options={['Todas as opções']}/>
                <Select.Small text='como escolher?'/>
              </Select.Root>
            </div>
            <div className='w-[20%] max-[953px]:w-[95%]'>
              <Select.Root>
                <Select.Label text='HD / SSD' icon="./assets/icons/ssd.png"/>
                <Select.Select options={['Todas as opções']}/>
                <Select.Small text='como escolher?'/>
              </Select.Root>
            </div>
            <button className='w-[12%] h-[46px] px-3 bg-[var(--red-text-color)] mt-2 max-[953px]:w-[95%]'>
              <span className='text-[1.2rem] font-bold uppercase flex items-center justify-center gap-2'>Buscar <label>{/* {'>'} */}</label></span>
            </button>
          </div>
        </form>
    </section>
  )
}

export default FindYourPC ;