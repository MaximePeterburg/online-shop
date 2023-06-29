import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput, { FormInputValues } from '../form-input/form-input.component';
import { ButtonsContainer, SignInFormContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: ''
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputValues>();
  const onSubmit: SubmitHandler<FormInputValues> = (formFields) => {
    const { email, password } = formFields;
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('Ошибка при входе', error);
    }
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const dispatch = useDispatch();
  // const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     dispatch(emailSignInStart(email, password));
  //     resetFormFields();
  //   } catch (error) {
  //     console.log('Ошибка при входе', error);
  //   }
  // };
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='email'
          register={register}
          type='email'
          label='email'
          rules={{ required: true }}
        />
        <FormInput
          name='password'
          register={register}
          type='password'
          rules={{ required: true }}
          label='password'
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
