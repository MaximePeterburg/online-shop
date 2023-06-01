import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonsContainer, SignInFormContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: ''
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const dispatch = useDispatch();
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('Ошибка при входе', error);
    }
  };
  const signInWithGoogle = () => {
    try {
      dispatch(googleSignInStart());
    } catch (error) {
      console.log('Что-то пошло не так ...', error);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInFormContainer>
      <h2>Войти на Сайт</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          value={email}
          type='text'
          label='Email'
          required
          onChange={handleChange}
        />
        <FormInput
          name='password'
          value={password}
          type='password'
          label='Пароль'
          required
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type='submit'>Войти</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}>
            Войти, используя Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
