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

      expect(character.name).toBe('Wonder Woman');
    });
});