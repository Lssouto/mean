angular.module("loja-papelaria").value("config",($location)=>{
    let _baseUrl  = () =>{
        console.log("https://" + $location.host() + ":8080");
        return "https://" + $location.host() + ":8080" ;
    };
    return {
        baseUrl : _baseUrl
    }
});