import axios from 'axios';

const url = 'http://localhost:5000/api/contact';

export const sendEmail = (newEmail) => axios.post(url, newEmail);