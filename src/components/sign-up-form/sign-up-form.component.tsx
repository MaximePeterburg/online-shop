import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import Button from '../button/button.component';
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
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputValues>();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const onSubmit: SubmitHandler<FormInputValues> = (formFields) => {
    const { email, password, displayName } = formFields;
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
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpFormContainer>
      <h2>Зарегистрироваться</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='displayName'
          type='text'
          register={register}
          rules={{ required: true }}
          label='displayName'
        />
        <FormInput
          name='email'
          register={register}
          type='email'
          rules={{ required: true }}
          label='email'
        />
        <FormInput
          name='password'
          type='password'
          register={register}
          label='password'
          rules={{ required: true }}
        />
        <FormInput
          name='confirmPassword'
          type='password'
          rules={{ required: true }}
          label='confirmPassword'
          register={register}
        />
        <Button type='submit'>Зарегистрироваться</Button>
      </form>
    </SignUpFormContainer>
  );
}
export default SignUpForm;
