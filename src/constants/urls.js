export const JsonBaseURL = 'https://jsonplaceholder.typicode.com'


const todos = '/users';
const comments = '/comments';
const albums = '/albums';
const posts = '/posts';


export const urls = {
    todos,
    albums,
    comments,
    posts: {
        base:posts,
        byId: (id) => `${posts}/${id}`,
    }
}



