// function to check if a session_token exist
const getSessionToken = () => {
    
    const session_token = localStorage.getItem('session_token');
    return session_token;
}

export default getSessionToken;