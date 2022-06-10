let pegarPaes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Pegando duas fatias de pão')
    }, 2000);
});

let pegarGeleia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Pegando a geleia')
    }, 3000);
});

let pegarPastaAmendoim = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Pasta de amendoim em mãos também')
    }, 4000);
})

let passandoGeleia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Passando a geleia no pão...');
    }, 6000);
})

let passandoPastaAmendoim = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Passando a pasta de amendoim no pão...');
    }, 6000);
})

let passarRecheio = new Promise((resolve, reject) => {
    Promise.all([passandoGeleia, passandoPastaAmendoim])
    .then(([passandoGeleia, passandoPastaAmendoim]) => {
        console.log(passandoGeleia);
        console.log(passandoPastaAmendoim);
    })
});

pegarPaes.then((resultado) => {
    console.log(resultado);

    pegarGeleia.then((resultado2) => {
        console.log(resultado2);

        pegarPastaAmendoim.then((resultado3) => {
            console.log(resultado3);
            
            passarRecheio.then((resultado4) => {
                console.log(resultado4);
            })
        })
    })
});