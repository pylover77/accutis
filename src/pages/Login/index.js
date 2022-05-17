import React, { useState } from 'react';
import './login.css';


function Form(){
   
      const [entrada, setEntrada] = useState('');
      const [saida, setSaida] = useState('');

      const [isFinal, setIsFinal] = useState(false);
      const [trabalhados, setTrabalhados] = useState('');

   function calcular(id,id1){

      const novaentrada = entrada.split(':');
      const novasaida = saida.split(':');
      const horaini = +novaentrada[0];
      const minuini = +novaentrada[1];
      const horafim = +novasaida[0];
      const minufim = +novasaida[1];
      if(horaini <= 12 && horaini >= 8){
         const hora1 = horaini * 60 + minuini
         const hora2 = horafim * 60 + minufim
         const subtrair = hora2 - hora1
         const horatrabalhadas = Math.floor(subtrair/60)
         const minutos = subtrair%60
         setTrabalhados(horatrabalhadas + ' horas' + ' e ' + minutos +' minutos')
         setIsFinal(true);
         
      
      }
      
   }

   const handlerform = () => {
      if(isFinal){
         setIsFinal(false);
         return
      }
      calcular ('erro', 'mmodal')
   }



 
   return (
      <>
         <div className="login">
         <div className="login-center">
            <h1>Accutis</h1>

            {
               isFinal ?
               <>

                  <p id='result'>Total de horas trabalhadas: {trabalhados}</p>

               </>
               : 
               <>
                  <div className="login-loginInputInicio">
                     <input
                        type="time"
                        placeholder="Digite seu horário de entrada. Ex: 16:30"
                        id="inicio"
                        value={entrada} onChange={e => setEntrada(e.target.value)}
                     />
                  </div>

                  <div className="login-loginInputFim">
                     <input
                        placeholder="Digite seu horário de saida. Ex: 16:30"
                        type="time"
                        id = "fim"
                        value={saida} onChange={e => setSaida(e.target.value)}
                     />
                  </div>
               </>

            }
            

            <button type="submit" id="mmodal" onClick={handlerform}>
               {isFinal ? 'Tentar Novamente' : 'Calcular'}
            </button>


         </div>
      </div>
      
      </>
   
   
   )



   

   
}

export default Form

