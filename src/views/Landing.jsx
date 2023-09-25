import React from 'react';
import image from './../assets/edificioBackground.png'

const Landing = ()=>{
    return(
        <>
          <section className="font-barlow text-black mx-auto ">
            <h1 className='mx-auto font-extrabold text-5xl tracking-[-0.15rem] leading-normal'>Invertí en Pesos y ganá en Dólares</h1>
            <h6>Sumate a los que invierten de la manera más segura y confiable: en <b className='text-primaryBlue'>Propiedades</b></h6>
            <div className="flex mx-auto justify-evenly">
                <button>
                 Registrate
                </button>
                <button>
                 Consultanos
                </button>
            </div>
            <img src={image} alt="" />

          </section>

        </>
    )
}

export default Landing;