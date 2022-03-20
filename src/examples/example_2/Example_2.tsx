import React, {ForwardedRef, forwardRef, Fragment, useRef} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

type ButtonType = { onSubmit: () => void };
type InputType = { onKeyDown: (e: React.KeyboardEvent) => void };

export const Example_2 = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const clearingField = (): void => {
    if (emailRef.current) {
      emailRef.current.value = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.keyCode === 13 && emailRef.current) {
      alert(`email: ${emailRef.current.value}`);
      clearingField();
    }
  };

  const handleSubmit = (): void => {
    if (emailRef.current) {
      console.log({email: emailRef.current.value});
    }

    clearingField();
  };

  return (
    <div style={{...CONTAINER_STYLES} as any}>

      <Input ref={emailRef} onKeyDown={handleKeyDown} />
      <Button onSubmit={handleSubmit} />
    </div>
  );
};

const Button = (props: ButtonType) => {
  return <button onClick={props.onSubmit}>Submit</button>;
};

const Input = forwardRef((props: InputType, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <Fragment>
      <input
        ref={ref}
        type="text"
        placeholder="Email"
        onKeyDown={props.onKeyDown}
      />
    </Fragment>
  );
});
