
//Lista de usuários e senhas já cadastrados no sistema
let usuarios = [
    {
        email: "admin",
        senha: "1234"
    },
    {
        email: "lorena",
        senha: "1234"
    },
    {
        email: "thiago",
        senha: "1234"
    }, {
        email: "camila",
        senha: "1234"
    }, {
        email: "pedro",
        senha: "1234"
    }, {
        email: "lucas",
        senha: "1234"
    }, {
        email: "larissa",
        senha: "1234"
    }, {
        email: "fernando",
        senha: "1234"
    }, {
        email: "welyda",
        senha: "1234"
    }, {
        email: "arthur",
        senha: "1234"
    }, {
        email: "matheus",
        senha: "1234"
    }, {
        email: "rayssa",
        senha: "1234"
    }, {
        email: "adriana",
        senha: "1234"
    }, {
        email: "patricia",
        senha: "1234"
    }, {
        email: "ana",
        senha: "1234"
    }
]

//lendo o conteúdo do navegador
let nomepag2 = localStorage.getItem("usuarioLogado")
//alert(nomepag2)

if (nomepag2 != undefined) {
    //Todo js página 2 

    //Função para deletar as informações do navegador quando clicado no "x" para sair da página
    window.addEventListener('beforeunload', function () {
        localStorage.removeItem('usuarioLogado');
    })


    //Função para deletar as informações do navegador quando clicado no botão "sair" da página
    const sair = document.querySelector("input#sair");
    sair.addEventListener("click", function () {
        localStorage.removeItem('usuarioLogado');
        window.location.href = "./index.html"

    })
    const listar = document.querySelector("#listar");
    listar.addEventListener("click", funclistar);

    //Chamada para a função para deletar usuário
    const deletar0 = document.querySelector("#deletar");
    deletar0.addEventListener("click", funcdeletar1);


//Função para selecionar qual usuário deve ser deletado
    function funcdeletar1() {
        let res = document.querySelector('div.res')
        res.innerHTML = "";
        res.innerHTML += "Deletar Usuário <br><br>"

        for (let i = 0; i < usuarios.length; i++) {

            res.innerHTML += `<div> <input type="checkbox" id="${i}" value= "${usuarios[i]}" "<label for="usarios${i}"> -${usuarios[i].email}</label></div>`

        }
        res.innerHTML += `<input type="button" value= "Deletar" class= "bt1" id="deletarusuarios2">`

        const inputdeletar2 = document.querySelector("#deletarusuarios2");
        inputdeletar2.addEventListener("click", deletarusuarios2)

    }
    //Função para deletar o usuário selecionado para ser deletado e listar a nova lista de ususários
    function deletarusuarios2() {
        let userdeletado = [""]
        for(let i = 0; i < 1 ; i++){
            let checkbox = document.getElementById(`${i}`);
            if (checkbox.checked == true) {
                alert("O usuário ADMIN não pode ser deletado!")
               i = usuarios.length 
        }
       
    }
        for (let i = 1; i < usuarios.length; i++) {
            let checkbox = document.getElementById(`${i}`);
            if (checkbox.checked == true) {
                userdeletado[i] = 1
            }
            else {
                userdeletado[i] = 0
            }

        }
        for (let i = userdeletado.length - 1; i >= 0; i--) {
            if (userdeletado[i] == 1) {
                usuarios.splice(i, 1);
            }

        }
        funcapagar()
        funclistar()
    }

    //Função para listar usuários cadastros
    function funclistar() {
        let res = document.querySelector('div.res')
        res.innerHTML = "";
        for (let i = 0; i < usuarios.length; i++) {

            res.innerHTML += `Usuário ${i} : ${usuarios[i].email}<br><br>`

        }


    }
    //Função para limpar qualquer informação que esteja na tela
    const apagar = document.querySelector("#apagar");
    apagar.addEventListener("click", funcapagar);

    function funcapagar() {
        let res = document.querySelector('div.res')
        res.innerHTML = ``

    }

    //Botão para capturar a ação de uma input do html para realizar a função
    const criaruser = document.querySelector("#puxar");
    criaruser.addEventListener("click", puxar);

    //Função que coletará os dados para a criação de um novo usuário
    function puxar() {
        let res = document.querySelector('div.res')
        res.innerHTML = "";
        res.innerHTML += "Criar Usuário <br><br>"


        res.innerHTML += `<div> <input id="email" type="text" placeholder="Novo usuário"> </div>`
        res.innerHTML += `<div> <input id="senha" type="password" placeholder="Digite sua senha" required> </div>`
        res.innerHTML += `<div> <input id="senhaconf" type="password" placeholder="Confirme sua senha" required> </div>`
        res.innerHTML += `<input type="button" value= "Cadastrar" class= "bt1" id="criarusuario1">`


        const inputcriar1 = document.querySelector("#criarusuario1");
        inputcriar1.addEventListener("click", puxar2)

    }

    //Após a ação do usuário clicando no botão id="criarusuário1" será capturado os dados para cadastrar o novo usuário dentro das condições da função "puxar2"
    function puxar2() {
        let emailnovo = document.querySelector("#email").value
        let senhanova = document.querySelector("#senha").value
        let senhaconf = document.querySelector("#senhaconf").value

        if (senhanova == senhaconf) {
            let cont = 0
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].email == emailnovo) {
                    cont = 1
                    alert="O usuário inserido já existe!"
                }

                    
            }
            if ((cont == 0) && (senhanova.length != 0) && (emailnovo.length !=0)) {
                alert("Novo usuário cadastrado com sucesso!")
                usuarios.push({ email: emailnovo, senha: senhanova })
                funclistar()
            }
            else {
                alert("Ação bloqueada, preencha todos o campos!")
            }

        }
        else {
            alert("As senhas inseridas devem ser iguais! ")
        }
    }

    //Botão de captura de ação do usuário do html
    const atualizar = document.querySelector("#atualizar");
    atualizar.addEventListener("click", atualizar1);

    //Captura de dados com senah e usuários antigos para a substituição desses dados antigos por novos
    function atualizar1() {
        let res = document.querySelector('div.res')
        res.innerHTML = "";
        res.innerHTML += "Atualizar Dados Cadastrais <br><br>"

        res.innerHTML += `Usuário Atual:<div> <input id="email2"  type="text" placeholder="Digite o usuário atual." </div>`
        res.innerHTML += ` Senha Atual: <div> <input id="senha2" type="password" placeholder="Digite a sua senha atual." </div>`
        res.innerHTML += `Novo Usuário:<div> <input id="emailnovo1"  type="text" placeholder="Digite o novo usuário." </div>`
        res.innerHTML += `Nova Senha: <div> <input id="senhanovo1" type="password" placeholder="Digite a nova senha." </div>`
        res.innerHTML += `<input type="button" value= "Atualizar" class= "bt1" id="atualizar2">`

        const atualizar2 = document.querySelector("#atualizar2");
        atualizar2.addEventListener("click", atualizar21)
    }

    //Após a ação do usuário clicando no botão id="atualizar2" será capturado os dados inseridos nas inputs para atualizar os dados dentro das condições da função "atualizar2"
    function atualizar21() {
        let userlog = document.querySelector("#email2").value
        let senhalog=document.querySelector('#senha2').value
        
          let  email= document.querySelector("#emailnovo1").value
          let  senha= document.querySelector("#senhanovo1").value

          let testandoEmail = usuarios.find(usuarios =>usuarios.email===userlog)
          let indice = usuarios.findIndex(usuarios =>usuarios.email===userlog)


            if((userlog.length==0)||(senhalog.length==0)||(email.length==0)||(senha.length==0)){
                alert("Preencha os campos corretamente e tente novamente!")
            }
            else{

          if(testandoEmail){
            if(usuarios[indice].senha==senhalog)
            {
                alert("Dados atualizados com sucesso!")
                usuarios[indice].email=email
                usuarios[indice].senha=senha

                funclistar()
            }
            else{
                alert("Senha atual está incorreta")
            }
          }
          else{
            alert("Usuário não encontrado")
          }
         
        }
        

        





       
}

    //Caso precise testar um usuário e uma senha será chamada essa função para realizar o teste se o usuário e a senha colocados no campo corresponde a algum dado registardo no código
    const teste0 = document.querySelector("#teste");
    teste0.addEventListener("click", teste1);
    function teste1() {
        let res = document.querySelector('div.res')
        funcapagar()
        res.innerHTML += "";
        res.innerHTML += "Testar Usuário <br><br>"
        res.innerHTML += `Usuário:<div> <input id="emailtest"  type="text" placeholder="Digite o usuário atual." </div>`
        res.innerHTML += ` Senha Atual: <div> <input id="senhatest" type="password" placeholder="Digite a sua senha atual." </div>`
        res.innerHTML += `<input type="button" value= "Testar" class= "bt1" id="teste01">`
        const teste1 = document.querySelector("#teste01");
        teste1.addEventListener("click", teste);
    }


    function teste() {
        let user = document.querySelector('#emailtest').value
        let pass = document.querySelector('#senhatest').value
        let erro = pass.length


        if (erro != 0)
            for (let cont = 0; cont < usuarios.length; cont++) {
                let contr = 0
                if (usuarios[cont].email == user) {
                    if (usuarios[cont].senha == pass) {
                        contr = 1
                        cont = usuarios.length
                        alert("Teste realizado com sucesso!")
                    }
                    else {
                        cont = usuarios.length - 1
                        contr = 0
                        alert("Senha incorreta!")
                    }

                }
                else if(cont==usuarios.length-1) {

                    alert("Usuário está incorreto!")
                    cont = usuarios.length - 1
                    contr = 0

                }


            }
            else{
                alert("Preencha os campos e tente novamente!")
            }

    }

}

else {
    //Todo js página 1 
    //Função para capturar os dados cadastrais dos usuários que entrarem no site para autorizar a sua entrada se as informações estiverem de acordo com as condições abaixo utilizando os dados do vetor "usuários"
    function entrar() {



        let user = document.querySelector('input.email').value
        let pass = document.querySelector('input.senha').value
        let res = document.querySelector('div.res1')


        for (let cont = 0; cont < usuarios.length; cont++) {
            if (user == usuarios[cont].email) {
                if (pass == usuarios[cont].senha) {
                    localStorage.setItem("usuarioLogado", usuarios[cont].email)
                    window.location.assign("./index2.html")
                    cont = usuarios.length

                }
                else {
                    res.innerHTML = `Senha incorreta!`
                    cont = usuarios.length - 1
                }

            }

            else if (cont == usuarios.length - 1) {
                res.innerHTML = `Usuário incorreto!`
                cont = usuarios.length - 1
            }
        }

        
    }
}
