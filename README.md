Oi, Obrigado pela oportunidade.

Para instalar em sua maquina é só clonar o repo  e fazer um npm install, após isto utilizar npm run dev

Para o front end, eu fiz dessa forma:

Existe um componente chamado Mainsection, ele é responsavel por chamar a API e trazer todos os carros por um MAP 

Foi pedido que ordenasse o preço, então eu utilizei o metodo .short

Foi criado um user especifico para vocês poderem acessarem

name: 123 password: 123

Ao entrar no Dashboard, você verá um local onde poderá adicionar novos veículos

Abaixo, você encontrará dois botões, um de editar e outro de excluir, são auto explicativos
No mesmo lugar estará a listagem de todos os veiculos do user especifico

Para a edição eu fiz um modal e puxei todos os dados da api de acordo com o id do carro e do user


O componente DashboardForm foi feito para a criação do formulario de veículos 

Foi criado três tipos de estados (success, error, warn)
Esses estados indicam o tipo de mensagem na hora da requisição

A pasta public lista todas as imagens da aplicaçao 
Em globals.css tem alguns estilos pré definidos, mas eu utilizei de forma majoritaria o TailwindCSS

Para esse desafio eu quis trazer um layout clean e minimalista, deixando apenas o essencial na tela.

Link: https://desafio-kavak.vercel.app/
