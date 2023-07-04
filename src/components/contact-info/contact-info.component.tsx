import { ChangeEvent, MouseEventHandler, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addInfoToOrder } from '../../store/order/order.actions';
import { selectOrderDetails } from '../../store/order/order.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  FORMATTED_RU_PHONE_LENGTH,
  RU_CODE_LENGTH,
  normalizePhoneNumber
} from '../../utils/util/util.utils';
import Button from '../button/button.component';
import FormInput, { FormInputValues } from '../form-input/form-input.component';
import PaymentForm from '../payment-form/payment-form.component';
import {
  CloseButton,
  ContactInfoContianer,
  ModalHeader,
  PaymentModal
} from './contact-info.styles';

const ContactInfo = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('+7 (');
  const cartItems = useSelector(selectCartItems);
  const orderDetails = useSelector(selectOrderDetails);
  const currentUser = useSelector(selectCurrentUser);
  const modalRef = useRef<HTMLDialogElement>(null);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   validateContactInfo(e);
  //   if (modalRef.current && phoneNumber.length === RU_PHONE_LENGTH) {
  //     dispatch(addInfoToOrder(orderItem, cartItems, contactInfo, currentUser!.id));
  //     modalRef.current.showModal();
  //   }
  //   // setValidatedPhone(validatePhone(phoneNumber));
  // };
  const handleClose = () => {
    modalRef.current?.close();
  };
  const handleBackdropClick: MouseEventHandler<HTMLDialogElement> = (e) => {
    const modalDimensions = modalRef.current?.getBoundingClientRect();
    if (
      modalRef.current &&
      modalDimensions &&
      (e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom)
    ) {
      modalRef.current.close();
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    let normalizedValue = normalizePhoneNumber(value);
    let formattedValue = '+7 (';
    if (normalizedValue.length > 1) {
      formattedValue += normalizedValue.substring(1, 4);
    }
    if (normalizedValue.length >= 5) {
      formattedValue += ') ' + normalizedValue.substring(4, 7);
    }
    if (normalizedValue.length >= 8) {
      formattedValue += '-' + normalizedValue.substring(7, 9);
    }
    if (normalizedValue.length >= 10) {
      formattedValue += '-' + normalizedValue.substring(9, 11);
    }
    setPhoneNumber(formattedValue);
  };
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   let { value, selectionStart } = e.target;
  //   let normalizedPhoneNumber = normalizePhoneNumber(value);
  //   let formattedPhoneNumber = '';
  //   if (!normalizedPhoneNumber) {
  //     return (value = '');
  //   }
  //   if (value.length !== selectionStart) {
  //     return;
  //   }
  //   if (['7', '8', '9'].includes(normalizedPhoneNumber[0])) {
  //     // Для российских номеров
  //     if (normalizedPhoneNumber[0] === '9') {
  //       normalizedPhoneNumber = '7' + normalizedPhoneNumber;
  //     }
  //     const firstSymbols = normalizedPhoneNumber[0] === '8' ? '8' : '+7';
  //     formattedPhoneNumber = firstSymbols + ' ';
  //     if (normalizedPhoneNumber.length > 1) {
  //       formattedPhoneNumber += '(' + normalizedPhoneNumber.substring(1, 4);
  //     }
  //     if (normalizedPhoneNumber.length >= 5) {
  //       formattedPhoneNumber += ') ' + normalizedPhoneNumber.substring(4, 7);
  //     }
  //     if (normalizedPhoneNumber.length >= 8) {
  //       formattedPhoneNumber += '-' + normalizedPhoneNumber.substring(7, 9);
  //     }
  //     if (normalizedPhoneNumber.length >= 10) {
  //       formattedPhoneNumber += '-' + normalizedPhoneNumber.substring(9, 11);
  //     }
  //   } else {
  //     // Для нероссийских номеров
  //     formattedPhoneNumber = '+' + normalizedPhoneNumber.substring(0, 16);
  //   }
  //   setPhoneNumber(formattedPhoneNumber);
  // };
  // const handlePhoneKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //   let input = e.target as HTMLInputElement;
  //   if (e.key === 'backspace' && normalizePhoneNumber(input.value).length === 1) {
  //     input.value = '';
  //   }
  //   return input;
  // };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputValues>();
  // const submitHandler = useForm<Inputs>().handleSubmit;
  const onSubmit: SubmitHandler<FormInputValues> = (contactInfo) => {
    dispatch(addInfoToOrder(orderDetails, cartItems, contactInfo, currentUser!.id));
    modalRef.current!.showModal();
  };

  // const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   let { value, name } = event.target;
  //   let numberInputValue = getNumbers(value);
  //   let formattedInputValue = '';
  //   if (!numberInputValue) {
  //     return value === '+7';
  //   }
  //   if (['7', '8', '9'].indexOf(numberInputValue[0]) > -1) {
  //     // Для российских номеров
  //     if (numberInputValue[0] === '9') {
  //       numberInputValue = '7' + numberInputValue;
  //     }
  //     const firstSymbols = numberInputValue[0] === '8' ? '8' : '+7';
  //     formattedInputValue = firstSymbols + ' ';
  //     if (numberInputValue.length > 1) {
  //       formattedInputValue += '(' + numberInputValue.substring(1, 4);
  //     }
  //     if (numberInputValue.length >= 5) {
  //       formattedInputValue += ') ' + numberInputValue.substring(4, 7);
  //     }
  //     if (numberInputValue.length >= 8) {
  //       formattedInputValue += '-' + numberInputValue.substring(7, 9);
  //     }
  //     if (numberInputValue.length >= 10) {
  //       formattedInputValue += '-' + numberInputValue.substring(9, 11);
  //     }
  //   } else {
  //     // Для нероссийских номеров
  //     formattedInputValue = '+' + numberInputValue.substring(0, 16);
  //   }
  //   value = formattedInputValue;
  //   setContactInfo((prevContactInfo) => ({
  //     ...prevContactInfo,
  //     [name]: value
  //   }));
  // };
  return (
    <ContactInfoContianer>
      <h2>ДАННЫЕ ДЛЯ ОТПРАВКИ ЗАКАЗА</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          rules={{ required: { value: true, message: 'Обязательное поле' } }}
          name='address'
          label='Адрес доставки'
          type='text'
          error={errors.address?.message}
          uncontrolledValue={watch('address')}
        />
        <FormInput
          register={register}
          rules={{
            required: { value: true, message: 'Обязательное поле' },
            // maxLength: { value: 18, message: 'Длина номера 11 символов' },
            minLength: {
              value: FORMATTED_RU_PHONE_LENGTH,
              message: 'Некорректный номер'
            }
          }}
          // defaultValue='+7'
          label='Номер телефона'
          type='tel'
          name='phoneNumber'
          onInput={handleChange}
          // onkeydown={handlePhoneKeyDown}
          value={phoneNumber}
          error={errors.phoneNumber?.message}
        />
        <Button type='submit'>Продолжить Оформление</Button>
      </form>
      <PaymentModal ref={modalRef} onClick={handleBackdropClick}>
        <ModalHeader>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </ModalHeader>
        <PaymentForm />
      </PaymentModal>
    </ContactInfoContianer>
  );
};
export default ContactInfo;
