import { endAt } from 'firebase/firestore';
import { ChangeEvent, FormEvent, MouseEventHandler, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addInfoToOrder } from '../../store/order/order.actions';
import { selectOrderItem } from '../../store/order/order.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { RU_CODE_LENGTH, RU_PHONE_LENGTH } from '../../utils/util/util.utils';
import Button from '../button/button.component';
import FormInput, { FormInputValues } from '../form-input/form-input.component';
import PaymentForm from '../payment-form/payment-form.component';
import {
  CloseButton,
  ContactInfoContianer,
  ModalHeader,
  PaymentModal
} from './contact-info.styles';

const defaultContactInfoFields = {
  address: '',
  phoneNumber: '+7'
};
const ContactInfo = () => {
  const dispatch = useDispatch();
  const [contactInfo, setContactInfo] = useState(defaultContactInfoFields);
  const [validatedPhone, setValidatedPhone] = useState(true);
  const { address, phoneNumber } = contactInfo;
  const cartItems = useSelector(selectCartItems);
  const orderItem = useSelector(selectOrderItem);
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
    // const { value, name } = e.target;
    // if (
    //   name === 'phoneNumber' &&
    //   (value.length < RU_CODE_LENGTH ||
    //     value.length > RU_PHONE_LENGTH ||
    //     Number.isNaN(Number(value)))
    // ) {
    //   return;
    // }
    let { value, name } = e.target;
    let numberInputValue = getNumbers(value);
    let formattedInputValue = '';
    if (!numberInputValue) {
      return value === '+7';
    }
    if (['7', '8', '9'].indexOf(numberInputValue[0]) > -1) {
      // Для российских номеров
      if (numberInputValue[0] === '9') {
        numberInputValue = '7' + numberInputValue;
      }
      const firstSymbols = numberInputValue[0] === '8' ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';
      if (numberInputValue.length > 1) {
        formattedInputValue += '(' + numberInputValue.substring(1, 4);
      }
      if (numberInputValue.length >= 5) {
        formattedInputValue += ') ' + numberInputValue.substring(4, 7);
      }
      if (numberInputValue.length >= 8) {
        formattedInputValue += '-' + numberInputValue.substring(7, 9);
      }
      if (numberInputValue.length >= 10) {
        formattedInputValue += '-' + numberInputValue.substring(9, 11);
      }
    } else {
      // Для нероссийских номеров
      formattedInputValue = '+' + numberInputValue.substring(0, 16);
    }
    value = formattedInputValue;
    setContactInfo((prevContactInfo) => ({
      ...prevContactInfo,
      [name]: value
    }));
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputValues>();
  // const submitHandler = useForm<Inputs>().handleSubmit;
  const onSubmit: SubmitHandler<FormInputValues> = (contactInfo) => {
    dispatch(addInfoToOrder(orderItem, cartItems, contactInfo, currentUser!.id));
    modalRef.current!.showModal();
  };
  const PATTERN = /\D/g;
  const getNumbers = (value: string) => {
    return value.replace(PATTERN, '');
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
          rules={{ required: true }}
          name='address'
          label='Адрес доставки'
          type='text'
          inputValue={watch('address')}
        />
        <FormInput
          register={register}
          rules={{ required: true, maxLength: 12, minLength: 12 }}
          defaultValue='+7'
          label='Номер телефона'
          type='tel'
          name='phoneNumber'
          onChange={handleChange}
          value={phoneNumber}
        />
        {/* {errors.phoneNumber && <span>Не верный формат</span>} */}
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
