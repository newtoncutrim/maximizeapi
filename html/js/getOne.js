const currentUrl = new URL(window.location.href);
const id = new URLSearchParams(currentUrl.search).get('id');


function getOnUser(){
    axios.get(`http://localhost:8000/api/get.php?id=${id}`)
    .then(response =>{

        const dados = response.data.result
        let titulo = document.querySelector('#titulo')
        let descricao = document.querySelector('#descricao')
        let texto = document.querySelector('#texto')
        let data = document.querySelector('#data')
        let img = document.querySelector('#img')
        

        const dataBanco = new Date(dados.data);
        const dia = dataBanco.getDate().toString().padStart(2, '0');
        const mes = (dataBanco.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataBanco.getFullYear();
        const dataBrasil = `${dia}/${mes}/${ano}`;

        img.setAttribute("src", dados.img)
        titulo.append(dados.title)
        descricao.append(dados.descricao)
        texto.append(dados.texto)
        data.append(dataBrasil)
        
    })
    .catch(error => console.log(error))
}
getOnUser();

