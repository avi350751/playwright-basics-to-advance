const {test, expect} = require('@playwright/test')

test('My first test', async function({page}){

    console.log("My 1st test")
    expect(10).toBe(10)
})

test('My second test', async function({page}){

    console.log("My 2nd test")
    expect(100).toBe(100)
})

test('My third test', async function({page}){

    console.log("My 3rd test")
    expect('Avi').toContain('Avi')
    expect(true).toBeTruthy()
})

test('My fourth test', async function({page}){

    console.log("My 4th test")
    expect('avi').toContain('avi')
    expect(false).toBeFalsy()
})

test('My fifth test', async function({page}){

    console.log("My 5th test")
    expect("Ravi Varma".includes("Ravi")).toBeTruthy()
})