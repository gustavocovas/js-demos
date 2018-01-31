let xhr = new XmlHttpRequest();
// Callback que vai ser executado quando a resposta tiver sido carregada: (parece familiar?)
xhr.addEventListener('load', function() { 
  console.log(xhr.responseText); 
}); 

// HTTP GET na URL:
xhr.open("GET", "https://viacep.com.br/ws/01001000/json/");

// Dispara o request de fato:
xhr.send();