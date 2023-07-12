import { ChangeEvent, MouseEventHandler, useRef, useState } from 'react';
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addInfoToOrder } from '../../store/order/order.actions';
import { selectOrderItem } from '../../store/order/order.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  FORMATTED_RU_PHONE_LENGTH,
  normalizePhoneNumber
} from '../../utils/util/util.utils';
import Button from '../button/button.component';
import FormInput, { FormInputValues } from '../form-input/form-input.component';
import { FormInputLabel, Group, Input } from '../form-input/form-input.styles';
import PaymentForm from '../payment-form/payment-form.component';
import { CloseButton, ModalHeader } from './contact-info.styles';

const ContactInfo = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState<DaDataSuggestion<DaDataAddress>>();
  const [phoneNumber, setPhoneNumber] = useState('+7 (');

  const cartItems = useSelector(selectCartItems);
  const orderItem = useSelector(selectOrderItem);
  const currentUser = useSelector(selectCurrentUser);
  const modalRef = useRef<HTMLDialogElement>(null);

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
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputValues>();
  const onSubmit: SubmitHandler<FormInputValues> = (contactInfo) => {
    contactInfo = { ...contactInfo, address: address!.value };
    dispatch(
      addInfoToOrder(
        orderItem,
        cartItems,
        contactInfo,
        currentUser!.id,
        currentUser!.displayName
      )
    );
    modalRef.current!.showModal();
  };
  return (
    <div>
      <h2>ДАННЫЕ ДЛЯ ОТПРАВКИ ЗАКАЗА</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <AddressSuggestions
            token={import.meta.env.VITE_DADATA_API_KEY}
            value={address}
            onChange={setAddress}
            count={5}
            inputProps={{ required: true, minLength: 5 }}
            customInput={Input}
          />
          <FormInputLabel shrink={true}>Адрес доставки</FormInputLabel>
        </Group>
        <FormInput
          register={register}
          rules={{
            required: { value: true, message: 'Обязательное поле' },
            minLength: {
              value: FORMATTED_RU_PHONE_LENGTH,
              message: 'Некорректный номер'
            }
          }}
          label='Номер телефона'
          type='tel'
          name='phoneNumber'
          onInput={handlePhoneChange}
          value={phoneNumber}
          error={errors.phoneNumber?.message}
        />
        <Button type='submit'>Продолжить Оформление</Button>
      </form>
      <dialog ref={modalRef} onClick={handleBackdropClick}>
        <ModalHeader>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </ModalHeader>
        <PaymentForm />
      </dialog>
    </div>
  );
};
export default ContactInfo;
