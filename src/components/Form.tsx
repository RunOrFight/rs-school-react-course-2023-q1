import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  FormErrorMessage,
} from 'components';
import { GENRES } from 'constants/genre';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAudio } from 'types';
import { getBase64 } from 'utils';

interface IFormProps {
  addAudio: (newAudio: Omit<IAudio, 'id'>) => void;
}

type onSubmitData = Omit<Omit<IAudio, 'id'>, 'cover'> & { cover: null | FileList };

const defaultValues = {
  title: '',
  performer: '',
  cover: null,
  genre: '',
  isPublic: false,
  recordQuality: '',
  releaseDate: new Date(),
};

const Form: FC<IFormProps> = ({ addAudio }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<onSubmitData> = async (data) => {
    let cover = 'https://picsum.photos/200/300';
    if (data.cover?.[0]) {
      cover = await getBase64(data.cover[0]);
    }
    addAudio({ ...data, cover });
    reset(defaultValues);
    setTimeout(() => {
      alert('Data has been saved!');
    }, 0);
  };

  return (
    <form className="bg-white max-w-2xl p-4 mx-auto mb-10 border" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl pb-2 mb-2 text-center font-bold">Add new audio</h2>
      <div className="flex gap-4 mb-6">
        <div className="w-1/2 flex flex-col gap-2">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" aria-label="Title" {...register('title', { required: true })} />
            {errors.title && <FormErrorMessage>Type a title</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Performer</FormLabel>
            <Input
              type="text"
              aria-label="{erformer"
              {...register('performer', { required: true })}
            />
            {errors.performer && <FormErrorMessage>Type a Performer</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Release Date</FormLabel>
            <Input
              {...register('releaseDate', { valueAsDate: true, required: true })}
              aria-label="Release Date"
              type="date"
            />
            {errors.releaseDate && <FormErrorMessage>Select a date</FormErrorMessage>}
          </FormControl>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <FormControl>
            <FormLabel>Genre:</FormLabel>
            <Select {...register('genre', { required: true })} aria-label="Genre">
              {GENRES.map((genre) => (
                <option key={`genre_${genre}`} value={genre}>
                  {genre.toUpperCase()}
                </option>
              ))}
            </Select>
            {errors.genre && <FormErrorMessage>Select a genre</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Record Quality:</FormLabel>
            <RadioGroup>
              <Radio
                value="studio"
                aria-label="Studio"
                {...register('recordQuality', { required: true })}
              >
                Studio
              </Radio>
              <Radio
                value="amateur"
                aria-label="Amateur"
                {...register('recordQuality', { required: true })}
              >
                Amateur
              </Radio>
            </RadioGroup>
            {errors.recordQuality && <FormErrorMessage>Select a record quality</FormErrorMessage>}
          </FormControl>
          <FormControl>
            <FormLabel>Cover:</FormLabel>
            <Input
              type="file"
              aria-label="Cover"
              {...register('cover', { required: true })}
            ></Input>
            {errors.cover && <FormErrorMessage>Select a cover</FormErrorMessage>}
          </FormControl>
        </div>
      </div>

      <FormControl>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button>Submit</Button>

          <Checkbox
            aria-label="Public"
            {...register('isPublic', {
              validate: (value) => value,
            })}
          >
            Public
          </Checkbox>
        </div>
        {errors.isPublic && <FormErrorMessage>Should be public</FormErrorMessage>}
      </FormControl>
    </form>
  );
};

export default Form;
