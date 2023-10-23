var pacientes = []

const adicionarPaciente = () => {

    var inPacientes = document.getElementById('inPaciente')
    var nome = inPacientes.value
    var outLista = document.getElementById('outLista')
    // recebe os elementos html em variáveis

    if(nome == "") {
        alert("Insira o nome do paciente")
        inPacientes.focus()
        return
    } 

    pacientes.push(nome)

    var lista = "" // lista pra concatenar pacientes

    for( i= 0 ; i < pacientes.length; i++) {
        lista += (i + 1) + "- " + pacientes[i] + "\n"
    } // percorre os elementos do vetor

    outLista.textContent = lista // altera o conteudo da tag outlista
    
    inPacientes.value = ""
    inPacientes.focus()
    // limpa o campo e posiciona o cursor em inPaciente
}

//cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente) 

function adicionarUrgencia() {
    // cria referência aos elementos de entrada e saída de dados da página
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    
    var nome = inPaciente.value;           // obtém nome do paciente
  
    // verifica preenchimento do nome do paciente
    if (nome == "") {
      alert("Informe o nome do paciente");
      inPaciente.focus();
      return;
    }
  
    // adiciona paciente no início do vetor
    pacientes.unshift(nome);
  
    // string para concatenar pacientes
    var lista = "";
  
    // percorre os elementos do vetor 
    for (i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    // altera o conteúdo da tag outLista
  outLista.textContent = lista;

  // limpa campo e posiciona cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

const atenderPaciente = () => {
    //verificar se o vetor pacientes está vazio 
    if(pacientes.length == 0) {
        alert("não há pacientes na lista de espera")
        inPacientes.focus
        return
    }
    // cria referencia aos elementos de saida dos dados
    var outAtendimento = document.getElementById('outAtendimento')
    var outLista = document.getElementById('outLista')

    //remove paciente do inicio da fila e obtém nome

    var atender = pacientes.shift()

    //exibe nome dos pacientes em atendimento 

    outAtendimento.textContent = atender

    //string para concatenar pacientes 
    var lista = ""

    for( i= 0 ; i < pacientes.length; i++) {
        lista += (i + 1) + "- " + pacientes[i] + "\n"
    } // percorre os elementos do vetor

    //alterar o conteúdo da tag outlista
    outLista.textContent = lista
}

var btAtender = document.getElementById('btAtender')
btAtender.addEventListener("click", atenderPaciente)

