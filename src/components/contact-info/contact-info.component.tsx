import { ChangeEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setContactInformation } from '../../store/order/order.actions';
import FormInput from '../form-input/form-input.component';
import { ContactInfoContianer } from './contact-info.styles';

const defaultContactInfoFields = {
  address: '',
  phoneNumber: '+7'
};
const ContactInfo = () => {
  const dispatch = useDispatch();
  const [contactInfo, setContactInfo] = useState(defaultContactInfoFields);
  const { address, phoneNumber } = contactInfo;
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
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
    </ContactInfoContianer>
  );
};
export default ContactInfo;
