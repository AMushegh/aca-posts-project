const API_URL = `https://jsonplaceholder.typicode.com/posts`

const postsNode = document.getElementById('posts')
const postsGetButtonNode = document.getElementById('postsGetButton')

const getPosts = () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(el => {
                const newLiNode = document.createElement('li')
                const newTitleNode = document.createElement('div')
                const newBodyNode = document.createElement('div')

                newTitleNode.innerHTML = el.title
                newBodyNode.innerHTML = el.body
                newLiNode.appendChild(newTitleNode)
                newLiNode.appendChild(newBodyNode)

                postsNode.appendChild(newLiNode)
            });
        })
}

postsGetButtonNode.addEventListener('click', getPosts)
