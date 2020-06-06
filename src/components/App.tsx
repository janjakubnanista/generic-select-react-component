import React from 'react';
import { Select } from './Select/Select';
import { User, idFromUser, labelFromUser, users } from '../users';
import styled from 'styled-components';
import { CheckBoxSelectItem } from './Select/SelectItems';

export const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);

  return (
    <Container>
      <Select
        items={users}
        idFromValue={idFromUser}
        itemComponent={CheckBoxSelectItem}
        labelFromValue={labelFromUser}
        value={selectedUser}
        onChange={setSelectedUser}
      />

      <hr />

      <Select
        multiple
        items={users}
        idFromValue={idFromUser}
        itemComponent={CheckBoxSelectItem}
        labelFromValue={labelFromUser}
        value={selectedUsers}
        onChange={setSelectedUsers}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;