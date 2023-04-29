const setSession = (userData) => {
    // save session token
    localStorage.setItem('session_token', JSON.stringify(userData.session_token));
    localStorage.setItem('company_id', JSON.stringify(userData.session_token));
    localStorage.setItem('account_type', JSON.stringify(userData.account_type));
    localStorage.setItem('company_id', JSON.stringify(userData.company_id));
    localStorage.setItem('fullname', JSON.stringify(userData.fullname));
    localStorage.setItem('phone_number', JSON.stringify(userData.phone_number));
    localStorage.setItem('preferred_page', JSON.stringify(userData.preferred_page));
}

export default setSession;