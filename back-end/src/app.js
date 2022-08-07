const express = require('express');
const app = express();
const port = 80;

const verificadorcnpj = require('./lib/verificador_cnpj')
app.get("/validar-cnpj/:cnpj", (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let cnpj = req.params.cnpj;
    let status = verificadorcnpj.verificarStatus(cnpj);
    let tipo;
    if(status==1){
        tipo = verificadorcnpj.buscartipo(cnpj);
   } else{
       tipo="-";
   }   
    res.json({
    cnpj: cnpj,
    status: status,
    tipo: tipo
});
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})
