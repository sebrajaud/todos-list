import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://todolist-185ae.firebaseio.com/'
})

export default apiFirebase;