app.filter('firstUpper',()=>{
    return (valor)=>{
        return valor.substring(0,1).toUpperCase() + valor.substring(1,valor.length).toLowerCase();
    };
});