const SignupInput = ({id, label, type, name, placeholder, handleChange}) => {
    return (
        <>
            <label htmlFor={id} className="signup_input_label">
                {label}
            </label> <br />
            <input type={type} onChange={event => handleChange(event)} name={name} id={id} placeholder={placeholder}/>
            <br />
            <br />
        </>
    )
}

export default SignupInput;