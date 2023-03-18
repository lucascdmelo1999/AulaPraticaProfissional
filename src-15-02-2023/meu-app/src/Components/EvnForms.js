import React, {useState} from 'react';
import api from "../service/api";

function Form(){
    const [nome , setName] = useState('');

    const handleNameChange =(e)=>{
        e.preventDefault();
        
        api.getConsultaNome(nome)
        .then((res) => {
            setName(res.nome);
        })
        .catch(err => 
            console.log("algo errado, não está certo "+err)
        );       
    }

   /**function envioforms(){
        var texto= document.getElementsByName("nome")[0].value;
        alert(texto)
    } */ 

    return(
        <div >
            <div class="butao">
                <button onClick={handleNameChange}>Consultar</button>
            </div>
            <div>
                {
                    nome != null  
                    ?
                    <div>
                        <b>Nome: </b> {nome}
                    </div>
                    : 
                    <div>
                        <b>Nome invalido</b>
                    </div>

                }
            </div>
        </div>
        
    )
}

export default Form;



        