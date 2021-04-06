import React, {useState} from 'react'
import {connect} from 'react-redux'
import {signup} from "../actions/auth";
import {Link, Redirect} from "react-router-dom";
import {setAlert} from "../actions/alert";

const SignUp = ({isAuthenticated, signup}) => {
    console.log('Signup component',isAuthenticated,signup)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {email, name, password, password2} = formData
    const onChange = (e) => (
        setFormData({...formData, [e.target.name]: e.target.value})
    )
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            setAlert("Password do not match")
        } else {
            signup({name, email, password, password2})
        }
        console.log("signup authenticated",isAuthenticated)
        if (isAuthenticated) {
            <Redirect to="/"/>
        }
    }

    return (
        <div className="auth">
            <h1 className="auth__title">Sign Up</h1>
            <p className="auth__lead">Create your account</p>
            <form onSubmit={e => onSubmit(e)} className="auth__form" action="">
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                </div>
                <button className='auth__form__button'>Register</button>
                <p className='auth__authtext'>
                    Already have an account? <Link className='auth__authtext__link' to='/login'>Sign In</Link>
                </p>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {signup})(SignUp)