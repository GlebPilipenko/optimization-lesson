import {ChangeEvent, useState} from 'react';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';

export const Example_5 = () => {
  return (
    <div>
      <div>Add new component Form with local state</div>
      <Form />
      <SlowComponent />
    </div>
  );
};

const Form = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return <input type="text" value={value} onChange={onChange} />;
};
