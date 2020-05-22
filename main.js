/* alert('Cześć!') */

console.log('alert')

/* const createContent = (querySelectorContent, content) => {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
}

createContent('.main__heading--js','Hello World') */

/* function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
}

createContent('.main__heading--js','Hello World') */

const createContent = (querySelectorContent, content) => {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
}

createContent('.section__footer--description--js', 'Właśnie kończę na dziś (napisane w js)')


