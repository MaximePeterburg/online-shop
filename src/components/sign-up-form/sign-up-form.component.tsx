import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import Button from '../button/button.component';
import { ErrorMessage } from '../contact-info/contact-info.styles';
import FormInput, { FormInputValues } from '../form-input/form-input.component';
import { SignUpFormContainer } from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputValues>();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const onSubmit: SubmitHandler<FormInputValues> = (formFields) => {
    const { email, password, displayName, confirmPassword } = formFields;
    if (password === confirmPassword) {
      setIsPasswordsMatch(true);
    } else {
      setIsPasswordsMatch(false);
      return;
    }
    try {
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  const getErrorPasswordMessage = (message: string | undefined) => {
    if (message) {
      return message;
    }
    if (!isPasswordsMatch) {
      return 'Пароли не совпадают';
    }
  };
  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert('passwords do not match');
  //     return;
  //   }
  //   try {
  //     dispatch(signUpStart(email, password, displayName));
  //     resetFormFields();
  //   } catch (error) {
  //     if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
  //       alert('Cannot create user, email already in use');
  //     } else {
  //       console.log('user creation encountered an error', error);
  //     }
  //   }
  // };
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormFields({ ...formFields, [name]: value });
  // };
  return (
    <SignUpFormContainer>
      <h2>Зарегистрироваться</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='displayName'
          type='text'
          register={register}
          rules={{}}
          label='Ваше Имя'
          uncontrolledValue={watch('displayName')}
          error={errors.displayName?.message}
        />
        <FormInput
          name='email'
          register={register}
          type='email'
          rules={{ required: { value: true, message: 'Обязательное поле' } }}
          label='Email'
          uncontrolledValue={watch('email')}
          error={errors.email?.message}
        />
        <FormInput
          name='password'
          type='password'
          register={register}
          label='Пароль'
          rules={{
            required: { value: true, message: 'Обязательное поле' },
            minLength: { value: 8, message: 'Минимальная длина пароля - 8 символов' }
          }}
          error={getErrorPasswordMessage(errors.password?.message)}
          uncontrolledValue={watch('password')}
        />
        <FormInput
          name='confirmPassword'
          type='password'
          rules={{ required: { value: true, message: 'Обязательное поле' } }}
          label='Повторите пароль'
          uncontrolledValue={watch('confirmPassword')}
          register={register}
          error={getErrorPasswordMessage(errors.confirmPassword?.message)}
        />
        <Button type='submit'>Зарегистрироваться</Button>
      </form>
    </SignUpFormContainer>
  );
}
export default SignUpForm;
