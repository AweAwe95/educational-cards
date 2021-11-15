import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import {loginTC} from '../../../redux/auth-reducer';

export type AuthFormikType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const AuthorizationForm = () => {

    const dispatch = useDispatch();
    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
                rememberMe: false,
            },
            validate: (values) => {
                const errors: AuthFormikType = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                } else if (values.password.length <= 7) {
                    errors.password = 'Password should contain more than 7 symbols';
                }
                return errors;
            },
            onSubmit: (values) => {
                dispatch(loginTC(values));
                // formik.resetForm();
            }
        }
    );
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type="text" placeholder={'Enter your email'} {...formik.getFieldProps('email')}/>
                {formik.errors.email && formik.touched.email ?
                    <span style={{color: 'red'}}>{formik.errors.email}</span> : null}
            </div>

            <div>
                <input type="password" placeholder={'Enter your password'} {...formik.getFieldProps('password')}/>
                {formik.errors.password && formik.touched.password ?
                    <span style={{color: 'red'}}>{formik.errors.password}</span> : null}
            </div>

            <div>
                <input type="checkbox"/>
                <span>Remember me</span>
            </div>
            <button type={'submit'}>
                Login
            </button>
        </form>
    );
};
