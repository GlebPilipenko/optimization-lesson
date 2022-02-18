import {FC, useState} from 'react';

const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};
const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};

type PropsType = { isChecked: boolean, onSetIsChecked: () => void };

// Task
// If click to Button component Checkbox not re-render
// If click to Checkbox component Button not re-render

export const Example_3 = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handlePlusCountValue = () => {
    setFirstCount(firstCount + 1);
  };

  const handleSetIsChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <div>{`Count equal: ${firstCount}`}</div>
      <Button onPlusCountValue={handlePlusCountValue} />
      <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked} />
    </div>
  );
};

export const Button: FC<{ onPlusCountValue: () => void }> = ({onPlusCountValue}) => {
  return (
    <div>
      <button
        style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
        onClick={onPlusCountValue}
      >
        Plus first counter
      </button>
    </div>
  );
};

export const Checkbox: FC<PropsType> = ({isChecked, onSetIsChecked}) => {
  return (
    <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
  );
};
