import { ChangeEvent, FC, FormEvent, MouseEventHandler, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContactInformation } from '../../store/order/order.actions';
import { selectContactInfo } from '../../store/order/order.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
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
  const { address, phoneNumber } = contactInfo;
  const modalRef = useRef<HTMLDialogElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
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
    const { value, name } = e.target;
    setContactInfo((prevContactInfo) => ({ ...prevContactInfo, [name]: value }));
    if (name === 'phoneNumber' && value.length === 12) {
      dispatch(setContactInformation({ ...contactInfo, [name]: value }));
    }
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      dispatch(setContactInformation({ ...contactInfo, [name]: value }));
    }, 1500);
  };
  return (
    <ContactInfoContianer>
      <h2>ДАННЫЕ ДЛЯ ОТПРАВКИ ЗАКАЗА</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={address}
          onChange={handleChange}
          name='address'
          type='text'
          required
          label='Адрес доставки'
        />
        <FormInput
          value={phoneNumber}
          onChange={handleChange}
          name='phoneNumber'
          type='text'
          required
          label='Номер телефона'
        />
        <Button type='submit' disabled={contactInfo.phoneNumber.length !== 12}>
          Продолжить Оформление
        </Button>
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
