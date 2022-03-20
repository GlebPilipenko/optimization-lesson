import {FC, Fragment, memo, useState} from 'react';
import {UserType} from 'App';

const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};
const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};

type PropsType = { users: UserType[] };

// Task
// If click to remove button component Li not re-render
// React.memo and useCallback fot component Button it's required??

const getTempData = (localUser: UserType) => {
  const [tempData] = Object.entries(localUser);

  return tempData;
};

export const Example_7 = memo((props: PropsType) => {
  const [localUsers, setLocalUsers] = useState<UserType[]>(props.users);

  const handleRemoveButtonUserClick = (removedId: string) => {
    const updatedUsers = localUsers.filter((localUser) => {
      const [_, {id}] = getTempData(localUser);

      return id !== removedId;
    });

    setLocalUsers([...updatedUsers]);
  };

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <ul>
        {localUsers.map((localUser: UserType) => {
          const [key, {id, name}] = getTempData(localUser);

          return (
            <Fragment key={key}>
              <Li name={name} />
              <Button id={id} onRemoveButtonUserClick={handleRemoveButtonUserClick} />
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
});

const Li = ({name}: { name: string }) => <li>{name}</li>;

const Button: FC<{ id: string, onRemoveButtonUserClick: (removedId: string) => void }> = ({
  id,
  onRemoveButtonUserClick
}) => {
  return (
    <div>
      <button
        style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
        onClick={() => onRemoveButtonUserClick(id)}
      >
        Remove
      </button>
    </div>
  );
};
