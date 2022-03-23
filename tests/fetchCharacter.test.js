require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
    it('Checks if the characters name is Wonder Woman', async () => {
      // console.log(await fetchCharacter('720'));
      const character = await fetchCharacter('720');

      // Verificamos se a resposta da API é um objeto e acessamos a chave nome desse objeto para testar o nome da personagem
      // console.log(character.name);

      // Verifica se não é um falso positivo alterando o resultado esperado para 'Spider Man'
      // expect(character.name).toBe('Spider Man');

      // Foi usado o .toBe pq o retorno é name e name é uma string
      expect(character.name).toBe('Wonder Woman');
    });
    
    it('Checks if it returns an error when executing the function without parameter', async () => {
      const failRequest = await fetchCharacter();
      // Observando o retorno da função pelo console.log()
      // console.log(failRequest);

      // Foi usado .toEqual pq o retorno é new Error, que é um construtor do JavaScript responsável por criar um OBJETO de erro.
      expect(failRequest).toEqual(new Error('You must provide an url'));
    });
});