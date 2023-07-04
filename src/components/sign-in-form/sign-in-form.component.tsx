import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import { selectUserError } from '../../store/user/user.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ErrorMessage } from '../contact-info/contact-info.styles';
import FormInput, { FormInputValues } from '../form-input/form-input.component';
import { ButtonsContainer, SignInFormContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: ''
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const userError = useSelector(selectUserError);
  const [userErrorMessage, setUserErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    watch,
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
    setUserErrorMessage('');
  };
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current
      ? (isFirstRender.current = false)
      : setUserErrorMessage(getSignInErrorMessage());
  }, [onSubmit]);
  useEffect(() => {
    isFirstRender.current ? (isFirstRender.current = false) : setUserErrorMessage('');
  }, [emailSignInStart]);


  const signInWithGoogle = () => {
    try {
      dispatch(googleSignInStart());
    } catch (error) {
      console.log('Что-то пошло не так ...', error);
    }
  };
  const getSignInErrorMessage = () => {
    switch (userError?.message) {
      case 'Firebase: Error (auth/user-not-found).':
        return 'Пользователь не найден';
      case 'Firebase: Error (auth/wrong-password).':
        return 'Неверный пароль';
      case 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':
        return 'Слишком много попыток. Попробуйте войти позже.';
      default:
        return '';
    }
  };

  return (
    <SignInFormContainer>
      <h2>Войти на Сайт</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='email'
          register={register}
          type='email'
          label='Email'
          uncontrolledValue={watch('email')}
          rules={{ required: { value: true, message: 'Обязательное поле' } }}
          error={errors.email?.message}
        />
        <FormInput
          name='password'
          register={register}
          type='password'
          uncontrolledValue={watch('password')}
          rules={{
            required: { value: true, message: 'Обязательное поле' },
            minLength: { value: 6, message: 'Минимальная длина пароля - 6 символов' }
          }}
          label='Пароль'
          error={errors.password?.message}
        />
        {userErrorMessage.length > 1 && (
          <ErrorMessage style={{ display: 'flex', justifyContent: 'center' }}>
            {userErrorMessage}
          </ErrorMessage>
        )}
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
