const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById('nomeben');
let formEValido = false

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(" ")
    return nomeComoArray.length >=2;
}


form.addEventListener('submit', function(e){
   
    e.preventDefault();

    
    const numeroContaBeneficiario = document.getElementById("numconta")
    const valorDeposito = document.getElementById("valor")
    const mensagemSucesso = `Mantante de: <b>${valorDeposito.value}</b> Depositado para o cliente: <b>${nomeBeneficiario.value}</b> - Conta:<b>${numeroContaBeneficiario.value}</b>`;

    formEValido =validaNome(nomeBeneficiario.value)
    if(formEValido){
        const containerMsg = document.querySelector('.Sucess-msg')
        containerMsg.innerHTML = mensagemSucesso;
        containerMsg.style.display= "block"

        
        nomeBeneficiario.value = '';
        numeroContaBeneficiario .value= '';
        valorDeposito.value = '';
    }
    else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.Error-msg').style.display = "block";
    }
})

nomeBeneficiario.addEventListener("keyup", function(e){
    console.log(e.target.value)
    formEValido =validaNome(e.target.value)

    if(!formEValido){
     
        nomeBeneficiario.classList.add("error");
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.Error-msg').style.display = "block";
    }
    else{
        nomeBeneficiario.classList.remove("error");
        //nomeBeneficiario.style="";
        document.querySelector('.Error-msg').style.display = "none";
    }
})

//pela classlist é mais facil adicionar ou remover folhas de estilo do código
