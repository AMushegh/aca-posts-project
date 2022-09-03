const API_URL = `https://jsonplaceholder.typicode.com/posts`

const postsNode = document.getElementById('posts')
const postsGetButtonNode = document.getElementById('postsGetButton')
const filterInputNode = document.getElementById('filter-input')

let store;

const getPosts = () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            store = data
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

function filterPosts(userId, posts){
    console.log(posts)
    return posts.filter(post => post.userId === userId)
}

filterInputNode.addEventListener('change', () => {
    const value = filterInputNode.value
    console.log(value)
    const filteredPosts = filterPosts(+value, store)
    console.log(filteredPosts)
})
postsGetButtonNode.addEventListener('click', getPosts)
