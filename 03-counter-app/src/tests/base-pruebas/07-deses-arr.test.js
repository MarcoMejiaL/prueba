import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr',()=>{
    test('07-deses-arr',()=>{
        const [letters,numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123)
    })
})