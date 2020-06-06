import React from 'react';

export interface SelectItemProps<T> {
  selected: boolean;
  value: T;
  onToggle: (value: T) => void;
}

export interface BaseSelectProps<T> {
  items: T[];
  idFromValue: (value: T) => string | number;
  labelFromValue: (value: T) => React.ReactNode;
  itemComponent: React.ComponentType<SelectItemProps<T>>;
}

export interface SingleSelectProps<T> extends BaseSelectProps<T> {
  multiple: false;
  value?: T;
  onChange: (value: T) => void;
}

export interface MultiSelectProps<T> extends BaseSelectProps<T> {
  multiple: true;
  value?: T[];
  onChange: (value: T[]) => void;
}

export type SelectProps<T> = MultiSelectProps<T> | SingleSelectProps<T>;

// We will keep the itemComponent props from before, the only extra thing
// that we add is the children prop.
//
// (React actually adds the children prop automatically, I am only doing this
// to be extra explicit)
export interface SelectItemProps<T> {
  children: React.ReactNode;
  selected: boolean;
  value: T;
  onToggle: (value: T) => void;
}

// We can no longer destructure the props - after desctructuring the link
// between our multiple prop and the value/onChange props would vanish
export function Select<T>(props: SelectProps<T>) {
  const { idFromValue, itemComponent: ItemComponent, labelFromValue } = props;

  // We now "normalize" the props that can take different forms; value and onChange
  //
  // First we always convert the selected value(s) into an array.
  //
  // I hope you'll excuse my nested ternary operators and poor choice of a data structure,
  // it's been done keeping the article length in mind
  const selectedValues = props.multiple ? props.value || [] : props.value === undefined ? [] : [props.value];
  const selectedIds = selectedValues.map(idFromValue);
  const isSelected = (id: string | number) => selectedIds.includes(id);

  // Then we create a toggle even handler based on the value of the multiple prop
  const handleToggle = props.multiple
    ? // In the multiple version we will add/remove the item from the array of selected values
      (item: T) => {
        const id = idFromValue(item);
        const wasSelected = isSelected(id);
        const newValue = wasSelected ? selectedValues.filter(v => idFromValue(v) !== id) : [...selectedValues, item];

        props.onChange(newValue);
      }
    : // In the single version we just call onChange with the toggled item
      props.onChange;

  return (
    <div>
      {props.items.map(item => {
        const id = idFromValue(item);
        const selected = isSelected(id);

        // The item label comes from the labelFromValue prop
        const label = labelFromValue(item);

        // And the UI and UX comes from the itemComponent
        return (
          <ItemComponent key={id} value={item} selected={selected} onToggle={handleToggle}>
            {label}
          </ItemComponent>
        );
      })}
    </div>
  );
}

export function SelectItem<T>({ value, children, selected, onToggle }: SelectItemProps<T>) {
  const handleChange = () => onToggle(value);

  return (
    <div>
      <label>
        {/* For brevity I decided to use a simple checkbox to show the selected state */}
        <input type="checkbox" checked={selected} onChange={handleChange} />

        {/* And here we render our label */}
        <span>{children}</span>
      </label>
    </div>
  );
}

function assertFC<P>(component: React.FC<P>): asserts component is React.FC<P> {
  // We don't need to add any code here since the assertion happens on the type level
}

// Then in your Select component
assertFC(Select);
assertFC(SelectItem);

Select.defaultProps = {
  multiple: false,
};
