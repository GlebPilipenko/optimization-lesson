import {ChangeEvent, FC, useCallback, useState} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

// Task
// If change value on input Title component not re-render

export const Example_1 = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <Input value={value} onChange={handleChange} />
      <Title title="I am a title" />
    </div>
  );
};

const Title = (props: { title: string }) => <h3>{props.title}</h3>;

const Input: FC<PropsType> = ({value, onChange}) => {
  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={onChange} />
  );
};
