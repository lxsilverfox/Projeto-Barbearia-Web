const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20.0 },
        { id: 2, tipo: "Samurai", valor: 35.0 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 0 },
        { id: 5, tipo: "Razor part", valor: 0 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20.0 },
        { id: 2, tipo: "Van Dyke", valor: 20.0 },
        { id: 3, tipo: "Barba Média", valor: 20.0 },
        { id: 4, tipo: "Barba Baixa", valor: 20.0 },
        { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
};


function buscaCortePorId(Id) {
    for (let i = 0; i < barbearia.cortes.length; i++) {
        if (barbearia.cortes[i].id == Id) {
            return barbearia.cortes[i];
        }
    }
    return "Corte não encontrado";
}
buscaCortePorId(1)



function buscaBarbaPorId(Id) {
    for (let i = 0; i < barbearia.barbas.length; i++) {
        if (barbearia.barbas[i].id === Id) {
            return barbearia.barbas[i];
        }
    }
    return "Barba não encontrada";
}
buscaBarbaPorId(2)



function verificaStatusBarbearia() {
    if (barbearia.estaAberto == true) {
        return "Estamos abertos";
    } else {
        return "Estamos fechados";
    }
}
verificaStatusBarbearia()



function retornaTodosCortes() {
    return barbearia.cortes;
}
retornaTodosCortes()



function retornaTodasBarbas() {
    return barbearia.barbas;
}
retornaTodasBarbas()



let pedidos = {}
function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId);
    let barba = buscaBarbaPorId(barbaId);

    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor,
    }
    pedidos = pedido;
    return pedido;
}
criaPedido('lucas', 1, 1)



function atualizaPedido(lista, id, tipo, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == id) {
            lista[i].tipo = tipo;
            lista[i].valor = valor;
            break;
        }
    }
    return lista;
}
atualizaPedido(retornaTodasBarbas(), 5, "Atualizado", 20)




function calculaTotal(pedido) {
    let soma = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
    return soma;
}
calculaTotal(pedidos)