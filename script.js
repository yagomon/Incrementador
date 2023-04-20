function gerar() {
  const inputNumber = document.querySelector('.number');
  const inputQuant = document.querySelector('.quant');

  const number = parseInt(inputNumber.value)
  const quant = parseInt(inputQuant.value)

  for (let i = 0; i < quant; i++) {
    list.push(number + i)
  }

  for (i in list) {
    let div = document.createElement('DIV')
    div.classList.add('row');
    div.classList.add('delete');

    div.innerHTML = `
      <textarea readonly id="text${list[i]}" >${list[i]}-0</textarea> 
      
      <button class="copiar" type="button" onclick= copiar(${list[i]})>
        copiar
      </button>`;

    listar.appendChild(div);
  }

  if(inputNumber.value =="" || inputQuant.value == ""){
    const msg = document.createElement('h4');
    const textMsg = document.createTextNode('Preencha os campos acima!!!')

    msg.appendChild(textMsg)

    listar.insertAdjacentElement('beforeend', msg)
    
    setTimeout(() => { 
      listar.innerHTML='<i class="fa-solid fa-xmark" onclick=btnDelete()></i>';
      listar.style.visibility="hidden"
    }, 2500)
  }

  listar.style.visibility="visible"
}

function copiar(id) {
  let textArea = document.querySelector(`#text${id}`)
  console.log(textArea)
  textArea.select()
  document.execCommand('copy')
}

function btnDelete(){
  listar.innerHTML='<i class="fa-solid fa-xmark" onclick=btnDelete()></i>'

  list= []

  if(list == ""){
    listar.style.visibility='hidden'
  }
  

}

const listar = document.querySelector('.listar');

var inputs = document.querySelector('.input');
inputs.focus();

let list = []

