// import {renderHook } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import {useLocalStorage} from './useLocalStorage'

// describe('useLocalStorage', ()=>{
// beforeEach(()=>{
//     localStorage.clear() // clear local storage before every test
// })

// test('renders the initial value provided if LocalStorage has no preRegistered value', ()=>{
//     const key='keyTest'
//     const initialValue = '# Value Test'

//     const {result} = renderHook(()=>useLocalStorage(key, initialValue))
//     expect(result.current.value).toBe(initialValue)
// })

// test('renders the value stored previously',()=>{
//     const key='keyTest'
//     const storedValue = "Stored value Test"

//     localStorage.setItem(key,JSON.stringify(storedValue))
//     const {result} = renderHook(()=>useLocalStorage(key))

//     expect(result.current.value).toBe(storedValue)

// })

// test('new value is being updated and stored', ()=>{

// })

// })