import axios from 'axios';

// define common URL fro application
const instance = axios.create({
    baseURL: 'https://myproject-react-demo.firebaseio.com/'
});

export default instance;