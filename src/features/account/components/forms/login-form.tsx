/** @jsxImportSource @emotion/react */
// import email from 'assets/images/icons/email.svg';
// import password from 'assets/images/icons/password.svg';
// import seperate from 'assets/images/icons/seperate.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import LongButton from 'core/components/BaseUI/Button/LongButton/LongButton';
import Icon from 'core/components/BaseUI/Icon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { formStyle } from './form-styles';

export type FormValues = {
  email: string;
  password: string;
};
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('The account is Incomplete or incorrect . Make sure you entered it correctly.'),
  password: yup.string().min(8).max(32).required(),
});
const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const [showpPw, setShowPw] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={[formStyle.self]}>
        <div css={formStyle.fieldContainer}>
          <label htmlFor="email" css={[formStyle.labelInput]}>
            Email: <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              formStyle.containInput,
              errors.email && formStyle.containInputError,
              getValues().email && !errors.email && formStyle.containInputSuccess,
            ]}
          >
            <Icon icon="mail-solid" size={20} />
            <Icon icon="rectangle" size={20} />
            <input type="text" id="email" placeholder="Email" {...register('email')} />
            {getValues().email &&
              (!errors.email ? <Icon icon="success" size={20} /> : <Icon icon="error" size={20} />)}
          </div>
          {errors.email && <h6>{errors.email?.message}</h6>}
        </div>

        <div css={formStyle.fieldContainer}>
          <label htmlFor="password" css={[formStyle.labelInput]}>
            Password <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              formStyle.containInput,
              errors.password && formStyle.containInputError,
              getValues().password && !errors.password && formStyle.containInputSuccess,
            ]}
          >
            <Icon icon="password-solid" size={20} />
            <Icon icon="rectangle" size={20} />
            <input
              type={showpPw ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            {getValues().password &&
              (!errors.password ? (
                showpPw ? (
                  <Icon size={20} icon="eye-solid" onClick={() => setShowPw(false)} />
                ) : (
                  <Icon size={20} icon="eye-slash-solid" onClick={() => setShowPw(true)} />
                )
              ) : (
                <Icon icon="error" size={20} />
              ))}
          </div>
        </div>
        <div css={formStyle.forgotPw}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <LongButton label="Login" type="submit" icon="register-solid"></LongButton>
      </form>
    </>
  );
};

export default LoginForm;
