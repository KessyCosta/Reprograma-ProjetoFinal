const perfisModel = require('../src/model/perfisModel')

describe('Testes do modelo Perfis', () => {
    const perfis = new perfisModel({ // perfilInstagram, donaPerfil, endereço
        "perfilInstagram": "perfilInstagram teste",
        "donaPerfil": "dona do perfil testes",
        "endereco": "endereço teste" 
    });
    it("Deve chamar o schema e retornar o perfil do instagram.", () => {
        expect(perfis.perfilInstagram).toBe("perfilInstagram teste");
    });
    it("Deve chamar o schema e retornar o nome da dona do perfil.", () => {
        expect(perfis.donaPerfil).toBe("dona do perfil testes"); 
    });
    it("Deve chamar o schema e retornar o endereço do perfil.", () => {
        expect(perfis.endereco).toBe("endereço teste");
    });
});

