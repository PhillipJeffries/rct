import { classNames } from "shared/lib/helpers/classNames/classNames"

describe('classNames function', ()=> {
    test('check className', () => {
        expect(classNames('f')).toBe('f')
    })
    test('check false mode', () => {
        expect(classNames('f', {f:false, d:false})).toBe('f')
    })
    test('check true mode', () => {
        expect(classNames('f', {f:true, d:true})).toBe('f f d')
    })
    test('check additional class array', () => {
        expect(classNames('f', {}, ['r', 'r'])).toBe('f r r')
    })
})