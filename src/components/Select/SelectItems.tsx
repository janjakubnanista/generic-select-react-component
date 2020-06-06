import React from 'react';
import { SelectItemProps } from './Select';
import { assertFC } from '../../utils/assertFC';

// An example implementation of a SelectItemComponent<T> type
export function CheckBoxSelectItem<T>({ value, children, selected, onToggle }: SelectItemProps<T>) {
  const handleChange = () => onToggle(value);

  return (
    <div>
      <label>
        <input type="checkbox" checked={selected} onChange={handleChange} />

        <span>{children}</span>
      </label>
    </div>
  );
}

assertFC(CheckBoxSelectItem);