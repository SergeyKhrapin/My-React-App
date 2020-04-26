import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ItFVv0-zO8RkEUZLoafE4bLKLpQrIPQPJleyOTwyD_4'
    }
});
