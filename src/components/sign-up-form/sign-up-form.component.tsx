import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { SignUpFormContainer } from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpFormContainer>
      <h2>Зарегистрироваться</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          onChange={handleChange}
          required
          name='displayName'
          label='Имя'
          value={displayName}
        />
        <FormInput
          type='email'
          onChange={handleChange}
          required
          label='E-mail'
          name='email'
          value={email}
        />
        <FormInput
          type='password'
          label='Пароль'
          onChange={handleChange}
          required
          name='password'
          value={password}
        />
        <FormInput
          type='password'
          onChange={handleChange}
          required
          label='Подтвердите пароль'
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Зарегистрироваться</Button>
      </form>
    </SignUpFormContainer>
  );
}
export default SignUpForm;
