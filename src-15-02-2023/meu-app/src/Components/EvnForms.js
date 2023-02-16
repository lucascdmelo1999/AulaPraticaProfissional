
function Form(){
    function envioforms(){
        var texto= document.getElementsByName("nome")[0].value;
        alert(texto)
    }

    return(
        <div class="butao">
            <button onClick={envioforms}>Enviar</button>
        </div>
    )
}

export default Form;



        