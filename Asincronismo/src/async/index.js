const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('eo'), 3000)
        : reject(new Error('test error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something)
}

console.log('Before')
doSomething()
console.log('after')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch(error) {
        console.log(error)
    }
}

console.log('Before1')
anotherFunction()
console.log('after1')