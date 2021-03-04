function calcular(tipo, valor){
    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''; // pega o ID resultado e set o valor vazio
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){

            document.getElementById('resultado').value += valor; 

        }

        if(valor === '='){
           
            var valor_campo = eval(document.getElementById('resultado').value);
           //o eval() converte numeros em string em variaveis numericas, mas seu uso dependo do caso
           
           document.getElementById('resultado').value = valor_campo;


        }

    }else if(tipo === 'valor'){
        //o += atribui e concatena o valor, recuperando o valor contido o campo e no processo de atribuição ele faz a concatenação      
        document.getElementById('resultado').value += valor;

    }
}