const imoveis = [];
let cadastro = "";
let menu = "";

do {
  menu = prompt(
    "Bem vindo!" +
      "\n" +
      "Número de imóveis : " +
      imoveis.length +
      "\n1 - Salvar novo imóvel" +
      "\n2 - Mostrar imóiveis" +
      "\n3 - Sair"
  );
  switch (menu) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Proprietário do imóvel : ");
      imovel.quartos = prompt("Número de quartos do imóvel : ");
      imovel.banheiros = prompt("Número de banheiros:");
      imovel.garagem = prompt("O imóvel possui uma garagem?");

      const confirmacao = confirm(
        "Salvar este imóvel?" +
          "\nProprietário : " +
          imovel.proprietario +
          "\nNúmero de quartos : " +
          imovel.quartos +
          "\nNúmero de banheiros : " +
          imovel.banheiros +
          "\nO imóvel possui uma garagem? - - - " +
          imovel.garagem
      );
      if (confirmacao === true) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Retornando ao menu....");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel" +
            (i + 1) +
            "\nProprietário : " +
            imoveis[i].proprietario +
            "\nQuartos : " +
            imoveis[i].quartos +
            "\nBanheiros : " +
            imoveis[i].banheiros +
            "\nPossui garagem? - " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando....");
      break;
    default:
      alert("OPÇÃO INVÁLIDA");
  }
} while (menu !== "3");
