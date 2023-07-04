import { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current ? (isFirstRender.current = false) : navigate(-1);
  }, [currentUser]);
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
