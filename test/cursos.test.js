const cursosModel = require('../src/model/cursosModel')

describe('Post, Criar rota de teste.', () => {
    const cursos = new cursosModel({
        "curso": "curso teste",
        "assunto": "assunto para testes",
        "professora": "professora teste", 
        "numeroAulas": "quantidade de aulas teste",
        "endereco": "endereco teste"
    });
    it("Deve chamar o schema e retornar o nome correto do curso.", () => {
        expect(cursos.curso).toBe("curso teste");
    });
    it("Deve chamar o schema e retornar a descrição correta do assunto.", () => {
        expect(cursos.assunto).toBe("assunto para testes"); 
    });
    it("Deve chamar o schema e retornar o nome da professora.", () => {
        expect(cursos.professora).toBe("professora teste");
    });
    it("Deve chamar o schema e retornar a quantidade de aulas.", () => {
        expect(cursos.numeroAulas).toBe("quantidade de aulas teste");
    });
    it("Deve chamar o schema e retornar o endereço do curso.", () => {
        expect(cursos.endereco).toBe("endereco teste");
    });
});
  


