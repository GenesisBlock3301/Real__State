import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from "../actions/auth";
// import {Helmet} from 'react-helmet';

const Login = (props) => {
    const {isAuthenticated, login} = props
    console.log("Login props",props)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = formData
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        login(email,password)
    }
    console.log("Login com authentication ",isAuthenticated)
    if (isAuthenticated) {
        return <Redirect to='/'/>
    }
    return (
        <div className="auth">
            {/*<Helmet>*/}
            {/*    <title>Real state Login System</title>*/}
            {/*    <meta name="description"*/}
            {/*          content="login page"/>*/}
            {/*</Helmet>*/}
            <h1 className='auth__title'>Sign In</h1>
            <p className='auth__lead'>Sign into your Account</p>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="auth__form__group">
                    <input
                        type="email"
                        className="auth__form__input"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="auth__form__group">
                    <input
                        type="password"
                        className="auth__form__input"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <button className="auth__form__button">Login</button>
                <p className="auth__authtext">
                    Don't have an account? <Link className="auth__authtext__link" to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}
Login.propTypes = {
    login:PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login})(Login)