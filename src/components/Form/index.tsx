import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
} from 'components/ui';
import React, { createRef, FormEvent, MouseEventHandler } from 'react';
import css from './style.module.css';

const Form = () => {
  const ref = createRef<HTMLFormElement>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(ref.current?.elements);
  };

  return (
    <form action="" method="post" className={css.form} ref={ref} onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Birthday</FormLabel>
        <Input type="date" />
      </FormControl>
      <FormControl>
        <FormLabel>Country:</FormLabel>
        <Select>
          <option value="belarus">Belarus</option>
          <option value="russia">Russia</option>
          <option value="ukraine">Ukraine</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Gender:</FormLabel>
        <RadioGroup>
          <Radio>Male</Radio>
          <Radio>Female</Radio>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Photo:</FormLabel>
        <Input type="file"></Input>
      </FormControl>
      <FormControl>
        <input type="checkbox" name="agreed" />
      </FormControl>

      <div className={css.controls}>
        <button className="button primary">Submit</button>
        <button className="button">Clear</button>
      </div>
    </form>
  );
};

export default Form;
