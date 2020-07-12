import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { css } from 'lib/constants';

type ButtonProps = {
  onClick: any;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const StyledButton = styled.button`
  margin: 1em auto;
  padding: 1em 1.5em;
  font-size: 1.2em;
  border: none;
  border-radius: 3px;
  color: ${css.white};
  background: ${css.purple};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background: ${css.pink};
  }
`;

const Button = forwardRef((props: ButtonProps, ref: any) => {
  const { onClick, children, className, type, ...remainingProps } = props;

  return (
    <StyledButton
      ref={ref}
      onClick={onClick}
      className={className}
      type={type}
      {...remainingProps}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  type: 'button',
};

export default Button;
