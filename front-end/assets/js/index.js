function validarCNPJ(event, form) {
    event.preventDefault();
    const validadorcnpj = form.cnpj;
    if (validadorcnpj) {
        const cnpj = validadorcnpj.value;
        if (cnpj.length === 14 && cnpj[8]==cnpj[9]&&cnpj[9]==cnpj[10]) {
             const URL = `http://localhost/validar-cnpj/${cnpj}`;
            axios.request(URL)
                .then(resposta => mostrarResposta(resposta.data))
                .catch(erro => console.error(erro));
        }
    }
}


function mostrarResposta(data) {
     const mensagem = `
         cnpj: ${data.cnpj},    
         status: ${data.status},
         tipo : ${data.tipo}
     `;
     alert(mensagem);
    console.log(data);
}