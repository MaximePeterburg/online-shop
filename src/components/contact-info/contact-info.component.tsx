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
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   if (
  //     name === 'phoneNumber' &&
  //     (value.length < RU_CODE_LENGTH ||
  //       value.length > RU_PHONE_LENGTH ||
  //       Number.isNaN(Number(value)))
  //   ) {
  //     return;
  //   }
  //   setContactInfo((prevContactInfo) => ({
  //     ...prevContactInfo,
  //     [name]: value
  //   }));
  // };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputValues>();
  // const submitHandler = useForm<Inputs>().handleSubmit;
  const onSubmit: SubmitHandler<FormInputValues> = (data) => {
    dispatch(addInfoToOrder(orderItem, cartItems, contactInfo, currentUser!.id));
    modalRef.current!.showModal();
  };
  return (
    <ContactInfoContianer>
      <h2>ДАННЫЕ ДЛЯ ОТПРАВКИ ЗАКАЗА</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          rules={{ required: true }}
          label='address'
          type='text'
        />
        <FormInput
          register={register}
          rules={{ required: true }}
          maxLength={12}
          minLength={12}
          defaultValue='+7'
          type='tel'
          label='phoneNumber'
        />
        {errors.phoneNumber && <span>Не верный формат</span>}
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
