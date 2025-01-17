
import{ sum, sub, div, mult} from './cal'

test('Deve retornar a soma de dois numeros', () => {
    expect(sum(2, 3)).toBe(5);
})

test('Deve lançar um erro se algum parâmetro não for um número', () => {
    expect(() => sum(2, '3')).toThrow('Os parâmetros devem ser números');
});


test('Deve retornar a subtração de dois numeros', () => {
    expect(sub(3, 2)).toBe(1);
})

test('Deve retornar a divição de dois numeros', () => {
    expect(div(10, 2)).toBe(5);
})

test('Deve retornar a multiplicação de dois numeros', () => {
    expect(mult(2, 3)).toBe(6)
})