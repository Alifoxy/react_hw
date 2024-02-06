export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/').then(resp => resp.json());
}
export const getUserPosts = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(resp => resp.json());
}