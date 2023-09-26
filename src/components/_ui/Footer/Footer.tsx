import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='w-[100%] h-[750px] text-white bg-[#3e3e3e]'>
        <div className=' text-[white] h-[250px] text-center pt-10'>
            <h1 className='text-[2.6rem] font-bold'>Assine a Newsletter Shopinfo</h1>
            <span className='text-[1.3rem] font-thin'>Tenha acesso às promoções e novidades antes de todo mundo.</span>

            <form className='flex justify-center gap-4 items-center w-[60%] m-auto mt-10 relative'>
                <div className='flex-1 flex gap-5'>
                    <input type="text" placeholder='Digite seu nome' className='w-[50%]'/>
                    <input type="text" placeholder='Digite seu email' className='w-[50%]'/>
                </div>
                <button className='w-[12%] h-[100%] px-3 bg-[var(--red-text-color)] mt-2'>
                    <span className='font-bold uppercase flex items-center justify-center gap-2'>Assinar</span>
                </button>
            </form>
        </div>

<div className='flex w-[100%] p-3 justify-center items-center border-t-[1px] border-t-red-800 border-b-[1px] border-b-zinc-700 '>

    <div className='flex flex-col justify-start w-[20%]'>
    <p className='font-semibold text-[24px]'>Atendimento</p>
    <p>segunda a sexta da 9h as 17h30</p>
    <p>Sabado das 9h as 12h30</p>
    </div>

    <div className='w-[60%] flex items-center justify-around'>
        <section className='flex'>
            <img className='w-[40px] h-[40px]' src='./assets/img/icon-rodape-telefone.png' />
            <div className='flex flex-col w-[80%]'>
                    <p>Vendas</p>
                    <p className='flex'>19 3308-7222</p>
            </div>
        </section>

        <section className='flex'>
            <img className='w-[40px] h-[40px]' src='./assets/img/icone-footer-whatsapp.png' />
            <div className='flex flex-col w-[80%]'>
                    <p>Vendas</p>
                    <p className='flex'>19 3308-7222</p>
            </div>
        </section>

        <section className='flex'>
            <img className='w-[40px] h-[40px]' src='./assets/img/icone-footer-email.png' />
            <div className='flex flex-col w-[80%]'>
                    <p>Vendas</p>
                    <p className='flex'>19 3308-7222</p>
            </div>
        </section>
        <section className='flex'>
        <img className='w-[40px] h-[40px]' src='./assets/img/icone-footer-email.png' />
            <div className='flex flex-col w-[80%]'>
                    <p>Vendas</p>
                    <p className='flex'>19 3308-7222</p>
            </div>
        </section>
        <section className='flex'>
            <img className='w-[40px] h-[40px]' src='./assets/img/icone-footer-chat.png' />
            <div className='flex flex-col w-[80%]'>
                    <p>Vendas</p>
                    <p className='flex'>19 3308-7222</p>
            </div>
        </section>

    </div>
</div>

<div className='w-[100%] flex p-5'>
        <div className='w-[50%] text-[16px] text-zinc-500 flex gap-9 border-r-[1px] border-r-zinc-700'>
            <div className='flex flex-col gap-4'>
                <p className='font-bold text-[white] text-[20px]'>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
            </div>
           <div className='flex flex-col gap-4'>
           <p className='font-bold text-[white] text-[20px]'>Institucional</p>
           <p>Institucional</p>
           <p>Institucional</p>
           <p>Institucional</p>
       </div>
       <div className='flex flex-col gap-4'>
                <p className='font-bold text-[white] text-[20px]'>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
                <p>Institucional</p>
            </div>
        </div>
<div>
    <div className='w-[50%] items-center justify-center p-3 flex flex-col'>
    <img  className='w-[100px]' src='./assets/img/logo1.png' />
        <div className='items-center w-full flex p-2'>
        <img  className='w-[70px]' src='./assets/img/icon-footer-selo1999.png' />    
        <img className='w-[70px]' src='./assets/img/icon-footer-selo1999.png' />
        <img className='w-[70px]' src='./assets/img/logo-letsencrypt.png' />
        <img className='w-[70px]' src='./assets/img/site-seguro-google-2.png' />
         <img className='w-[70px]' src='./assets/img/selo-ra-1000.png' />
        <img className='w-[70px]' src='./assets/img/selo-ra-1000.png' />

        </div>
    </div>

</div>
</div>

<div className='w-[100%] flex items-center border-t-[1px] border-t-zinc-700'>
    <div className='w-[50%] px-5 flex justify-end items center'>
        <p className='text-[19px] ml-[10px] w-[30%]'>Siga a <b className='text-red-600'>Shopinfo</b></p>
        <div className='flex items-center w-[30%] justify-around'>  
    <img className='w-[20px] h-[20px]' src='./assets/icons/icone-footer-youtube.png' />
    <img className='w-[20px] h-[20px]' src='./assets/icons/icone-footer-Twitter.png' />
    <img className='w-[20px] h-[20px]' src='./assets/icons/icone-footer-Instagram.png' />
    <img className='w-[20px] h-[20px]' src='./assets/icons/icone-footer-Facebook.png' />
    <img className='w-[20px] h-[20px]' src='./assets/icons/icone-footer-Blogger.png' />
    <img className='w-[20px] h-[20px]' src='./assets/icons/icone-footer-tiktok.png' />
        </div>
    </div>
    <div className='w-[50%] px-2 flex items-center p-3'>
        <div className='w-[70%] flex h-[60px]'>
            <section className='w-[10%] bg-[white] flex items-center justify-center'>
                   <img className='w-[30px] h-[30px]' src='./assets/icons/icone-home-lojafisica.png' />
            </section>
            <div className='w-[90%] px-3 bg-red-500 flex items-center justify-between'>
                <div>
                    <p>Loja Fisica</p>
                </div>
                <div>
                    <p>Rua aijsia ijeiow oijieof iowioe oiwioe</p>
                    <p>Rua aijsia ijeiow oijieof iowioe oiwioe</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className='w-[100%] bg-black text-white  h-[100px] flex justify-center items-center'>
    <p>FORMAS DE PAGAMENTO</p>
    <div className='flex w-[40%] justify-around'>
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-visa.png' />
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-mastercard.png' />
    <img className='w-[50px] h-[10px]' src='./assets/icons/footer-stamps-amex.png' />
    <img className='w-[50px] h-[10px]' src='./assets/icons/footer-stamps-diners.png' />
    <img className='w-[50px] h-[10px]' src='./assets/icons/footer-stamps-hipercard.png' />
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-elo.png' />
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-pix.png' />
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-boleto.png' />
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-boletoflex.png' />
    <img className='w-[50px] h-[20px]' src='./assets/icons/footer-stamps-nupay.png' />

</div>
</div>
<div className='w-[100%] bg-[black] flex items-center h-[100px] justify-around'>
    <div className='text-[12px] text-zinc-500'>
        <p>qwijw9euw ewue78wye w7ew7et7rtwer 7wet7wt87etw7er 7wy78eywgsgdgsdgusygdf sgydgs7gd7ffe7wf wgg7egfygysgd ysgdgsdgsydgf6we6wgsydc ysgdcgs7tdc7stdfisidf</p>
    </div>
    <div>
    <img className='w-[50px] h-[20px]' src='./assets/icons/icone-vtex.png' />
    </div>
</div>
    </footer>
  )
}

export default Footer;