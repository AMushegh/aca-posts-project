/*
 *   Constants
 */
const API_URL = `https://jsonplaceholder.typicode.com/posts`;
const LOADER_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921`;

/*
 *   DOM Elements
 */
const buttonElement = document.getElementById("postsGetButton");
const listElement = document.getElementById("posts");
const bodyElement = document.querySelector("body");

buttonElement.addEventListener("click", buttonClickHandler);

/*
 *   Functions
 */
function createLoader() {
  const loader = document.createElement("img");
  loader.src = LOADER_URL;
  return loader;
}

async function getPosts() {
  return fetch(API_URL).then((res) => res.json());
}

function buttonClickHandler() {
  renderLoader();
  getPosts().then(renderPostsOnDocument).finally(onPostsLoaded);
}

function renderPostsOnDocument(posts) {
  posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = post.title;
    listElement.appendChild(listItem);
  });
}

function renderLoader() {
  const loader = createLoader();
  bodyElement.appendChild(loader);
}

function removeLoader() {
  const loader = document.querySelector("img");
  loader.remove();
}

function disableButton() {
  buttonElement.disabled = true;
}

function onPostsLoaded() {
  removeLoader();
  disableButton();
}
