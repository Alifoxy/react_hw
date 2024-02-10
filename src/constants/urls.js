export const UsersBaseURL = 'https://jsonplaceholder.typicode.com'
export const CarsBaseURL = 'http://owu.linkpc.net/carsAPI/v1'


const users = '/users';
const comments = '/comments';
const cars = '/cars';

export const urls = {
    users,
    comments,
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}


