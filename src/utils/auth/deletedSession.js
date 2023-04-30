const deletedSession = () => {
    localStorage.removeItem('session_token');
    localStorage.removeItem('account_type');
    localStorage.removeItem('company_id');
    localStorage.removeItem('fullname');
    localStorage.removeItem('phone_number');
    localStorage.removeItem('company_id');
    localStorage.removeItem('preferred_page');
}

export default deletedSession