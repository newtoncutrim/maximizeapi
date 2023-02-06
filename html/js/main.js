const url = 'http://localhost:8000/api/getall.php';

function getAll(){
    
    axios.get(url)
    .then(response =>{
        let dados = response.data.result
        let pai = document.querySelector('.lista')
        
        
        let conteudo = ``
        dados.forEach(element => {
            const dataBanco = new Date(element.datas);
            const dia = dataBanco.getDate().toString().padStart(2, '0');
            const mes = (dataBanco.getMonth() + 1).toString().padStart(2, '0');
            const ano = dataBanco.getFullYear();
            const dataBrasil = `${dia}/${mes}/${ano}`;

            conteudo +=  `
            <div class=" col-lg-6">
            <div class=" item card">
                <div class=" row g-0">
                    <div class="pai col-6 col-md5">
                        <img src="${element.img}" class="card-img img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-6 col-md7">
                        <div class="card-body d-flex flex-colum">
                            <div class="h-100">
                                <h1 class='card-title'>${element.title}</h1>
                                <p class="descricao card-text">${element.descricao}</p>
                                <p class="descricao card-text">Data da publicação: ${dataBrasil}</p>
                            
                                
                                
                                <a href="http://localhost:8000/template/info.php?id=${element.id}" class="btn btn-primary ">ler mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        });
        pai.innerHTML = conteudo

    })
    .catch(error => console.log(error))
}
getAll();


// let ite = document.querySelector('.item')
        // let h = ite.querySelector('h1')
        // let descricao = ite.querySelector('.descricao')


// let newUser = {
//     title: 'novo',
//     descricao: 'novo',
//     data: '20230203'
// }
// function addUser(){
//     axios.post(url, newUser)
//     .then(response =>{
//         alert(JSON.stringify(response.data))
       
//     })
//     .catch(error => console.log(error))

// }
// addUser();




