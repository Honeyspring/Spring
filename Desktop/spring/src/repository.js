import axios from 'axios';

const BASE_URL = 'http://localhost:3000';



export function getBooks () {
 return axios.post(`${BASE_URL}/api/book`, { params: { 'x-access-token': localStorage.getItem('x-access-token')} })
 .then(response => response.data)
 .catch(err => Promise.reject('Request Not Authenticated!'));
 }
 
export function login (data) {

 return axios.post(`${BASE_URL}/api/auth/login`,{ email: data.signInEmail, password: data.signInPassword })
 
 .then(response => {
 localStorage.setItem('x-access-token', response.data.token);
 localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
 console.log(response.data);
 return response.data
 })
 .catch(err => Promise.reject('Authentication Failed!'));
 }

export function isAuthenticated(){
 return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
 }