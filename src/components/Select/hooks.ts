export const useMultiSelect = <T, I extends string | number>(
  values?: T[],
  idFromValue: (value: T) => I,
  onChange?: (values: T[]) => void,
): [(value: T) => boolean, (value: T) => void] => {
  const handleChange = (value: T) => {
    const selected;
    const newValue = wasSelected ? selectedValues.filter(v => idFromValue(v) !== id) : [...selectedValues, item];

    props.onChange(newValue);
  };
};
