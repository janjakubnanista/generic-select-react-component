import * as React from 'react';
import { Select, SelectItem } from './Select/Select';
import { User, idFromUser, labelFromUser, users } from '../users';

export const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);

  return (
    <div>
      <h1>{Date.now()}</h1>

      <hr />

      <Select
        items={users}
        idFromValue={idFromUser}
        itemComponent={SelectItem}
        labelFromValue={labelFromUser}
        value={selectedUser}
        onChange={setSelectedUser}
      />

      <hr />

      <Select
        items={users}
        idFromValue={idFromUser}
        itemComponent={SelectItem}
        labelFromValue={labelFromUser}
        value={selectedUser}
        onChange={setSelectedUser}
      />

      <hr />

      <Select
        multiple
        items={users}
        idFromValue={idFromUser}
        itemComponent={SelectItem}
        labelFromValue={labelFromUser}
        value={selectedUsers}
        onChange={setSelectedUsers}
      />

      <hr />

      <Select
        multiple
        items={users}
        idFromValue={idFromUser}
        itemComponent={SelectItem}
        labelFromValue={labelFromUser}
        value={selectedUsers}
        onChange={setSelectedUsers}
      />
    </div>
  );
};
