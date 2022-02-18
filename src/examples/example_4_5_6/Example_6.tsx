import {ChangeEvent, FC, ReactElement, useState} from 'react';

export const Example_6: FC<{ children: ReactElement }> = ({children}) => {
  // NO lags, because SlowComponent get in component how children
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      {children}
    </div>
  );
};
