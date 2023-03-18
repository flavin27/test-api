import { Database } from "./db"

test('connect() deve imprimir a mensagem de conexão correta', () => {
    const db = Database.getDatabase('localhost', 'root', 'password')
    const logSpy = jest.spyOn(console, 'log')

    db.connect()

    expect(logSpy).toHaveBeenCalledWith('Conectado: localhost, root password')
})
describe('Database', () => {
    test('getDatabase() deve retornar um objeto de banco de dados não nulo', () => {
        const db = Database.getDatabase('', '', '');
        expect(db).not.toBeNull();
    })
})
