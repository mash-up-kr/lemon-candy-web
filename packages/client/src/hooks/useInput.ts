import { ChangeEvent, useState } from 'react';

const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  return { value, onChange };
};

export default useInput;
