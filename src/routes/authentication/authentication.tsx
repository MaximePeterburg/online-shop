import SignUp from '../../components/sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
