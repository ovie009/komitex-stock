const endSession = () => {
    // save session token
    localStorage.removeItem('session_token');
    localStorage.removeItem('acccount_type');
    localStorage.removeItem('company_id');
    localStorage.removeItem('fullname');
    localStorage.removeItem('phone_number');
    localStorage.removeItem('preferred_page');
}

export default endSession;