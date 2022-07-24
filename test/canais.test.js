const canaisModel = require('../src/model/canaisModel')

describe('Post, Criar rota de teste.', () => {
    const canais = new canaisModel({ //canal, youtuber, assunto,descrição,endereço
        "canal": "canal teste",
        "youtuber": "youtuber para testes",
        "assunto": "assunto para teste", 
        "descrição": "descrição do canal para teste",
        "endereco": "endereco teste"
    });
    it("Deve chamar o schema e retornar o nome do canal.", () => {
        expect(canais.canal).toBe("canal teste");
    });
    it("Deve chamar o schema e retornar o nome da youtuber.", () => {
        expect(canais.youtuber).toBe("youtuber para testes"); 
    });
    it("Deve chamar o schema e retornar o assunto do canal.", () => {
        expect(canais.assunto).toBe("assunto teste");
    });
    it("Deve chamar o schema e retornar a descrição do canal.", () => {
        expect(canais.descricao).toBe("descrição do canal teste");
    });
    it("Deve chamar o schema e retornar o endereço do canal.", () => {
        expect(canais.endereco).toBe("endereco teste");
    });
});