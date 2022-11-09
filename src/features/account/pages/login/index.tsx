/**@jsxImportSource @emotion/react */
import LoginForm, { FormValues } from 'features/account/components/forms/login-form';
import SocialForm from 'features/account/components/forms/social-form/social-form';
import { registerPageStyle } from '../register/registerPageStyle';

const LoginPage = () => {
  /* istanbul ignore next */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (data: FormValues) => {
    //
  };

  return (
    <div css={[registerPageStyle.container]}>
      <h2>Log in to WECOPYTRADE</h2>
      <h5>Welcome to Wecopytrade. Please log in.</h5>
      <div css={registerPageStyle.content}>
        <div css={registerPageStyle.subContent}>
          <LoginForm onSubmit={login} />
        </div>
        <div css={registerPageStyle.subContent}>
          <SocialForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
