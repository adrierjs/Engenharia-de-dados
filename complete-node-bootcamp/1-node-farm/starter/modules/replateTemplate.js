module.exports = (temp, product) => { //função para realizar as alterações no nome do template
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); //A função replace é para substituir um item no array
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/, product.nutrients)
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); //se n for orgânico 

    return output;

}