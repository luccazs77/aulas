const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Sucesso!');
  }, 1000);
});

apiCall
.then((resposta) => {
  console.log(resposta);
})
  .catch((erro) =>{
    console.log(erro);
  });

  async function run() {
    try {
      const resposta = await apiCall;
      console.log(resposta);
    } catch (erro) {
      console.log(erro);
    }
  }

  run();