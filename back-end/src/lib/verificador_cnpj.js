function digitoVerificador01(cnpj) {
    let soma = 0;
    for (let i = 0; i <= 11; i++) {
        let valor = "543298765432";
        let digito = cnpj[i];
        let produto = digito * valor[i];
        soma = soma + produto;
    }

    let resto = soma % 11;
    let digitoVerificador01 = resto == 0 || resto == 1 ? 0 : 11 - resto;
    return digitoVerificador01;
}
function digitoVerificador02(cnpj) {
    let soma = 0;
    for (let i = 0; i <= 12; i++) {
        let valor = "6543298765432";
        let digito = cnpj[i];
        let produto = digito * valor[i];
        soma = soma + produto;
    }

    let resto = soma % 11;
    let digitoVerificador02 = resto == 0 || resto == 1 ? 0 : 11 - resto;
    return digitoVerificador02;
}

function verificarStatus(cnpj) {
    let digito01 = digitoVerificador01(cnpj);
    let digito02 = digitoVerificador02(cnpj);

    let digitoVerificadorInformado = cnpj[12] + cnpj[13];
    let digitoVerificadorCalculado = digito01 + '' + digito02;

    return digitoVerificadorInformado === digitoVerificadorCalculado;
}
function buscartipo(cnpj) {
    let tipo;
    let decimosegundoDigito = cnpj[11];
    if (decimosegundoDigito == 1) {
        tipo = 'matriz';
    } else if (decimosegundoDigito == 2) {
        tipo = 'filial';
    } else { tipo = "-"; }
    return tipo;
}
exports.verificarStatus = verificarStatus;
exports.buscartipo = buscartipo;
