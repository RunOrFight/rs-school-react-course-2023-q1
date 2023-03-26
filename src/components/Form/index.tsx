import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
} from 'components/ui';
import FormErrorMessage from 'components/ui/FormErrorMessage';
import { GENRES } from 'constants/genre';
import React, { Component, createRef, FormEvent, RefObject } from 'react';
import { IAudio } from 'types';
import { getBase64 } from 'utils';

interface IFormProps {
  addAudio: (newAudio: Omit<IAudio, 'id'>) => void;
}

interface IFormState {
  titleErrorMessage: boolean;
  performerErrorMessage: boolean;
  releaseDateErrorMessage: boolean;
  genreErrorMessage: boolean;
  recordQualityErrorMessage: boolean;
}

class Form extends Component<IFormProps, IFormState> {
  titleInput: RefObject<HTMLInputElement>;
  releaseDateInput: RefObject<HTMLInputElement>;
  genreSelect: RefObject<HTMLSelectElement>;
  studioRecordInput: RefObject<HTMLInputElement>;
  amateurRecordInput: RefObject<HTMLInputElement>;
  coverInput: RefObject<HTMLInputElement>;
  isPublicInput: RefObject<HTMLInputElement>;
  perfomerInput: RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.titleInput = createRef<HTMLInputElement>();
    this.perfomerInput = createRef<HTMLInputElement>();
    this.releaseDateInput = createRef<HTMLInputElement>();
    this.genreSelect = createRef<HTMLSelectElement>();
    this.studioRecordInput = createRef<HTMLInputElement>();
    this.amateurRecordInput = createRef<HTMLInputElement>();
    this.coverInput = createRef<HTMLInputElement>();
    this.isPublicInput = createRef<HTMLInputElement>();

    this.state = {
      titleErrorMessage: false,
      performerErrorMessage: false,
      releaseDateErrorMessage: false,
      genreErrorMessage: false,
      recordQualityErrorMessage: false,
    };
  }
  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!this.validateForm()) {
      return;
    }
    let cover = 'https://picsum.photos/200/300';
    if (this.coverInput.current!.files![0]) {
      cover = await getBase64(this.coverInput.current!.files![0]);
    }

    this.props.addAudio({
      title: this.titleInput.current!.value,
      releaseDate: new Date(this.releaseDateInput.current!.value) || Date.now(),
      genre: this.genreSelect.current!.value,
      recordQuality: this.studioRecordInput.current!.checked
        ? this.studioRecordInput.current!.value
        : this.amateurRecordInput.current!.value,
      cover,
      isPublic: this.isPublicInput.current!.checked,
      performer: this.perfomerInput.current!.value,
    });

    this.clearForm();

    setTimeout(() => {
      alert('Data has been saved!');
    }, 0);
  };

  clearForm() {
    this.titleInput.current!.value = '';
    this.releaseDateInput.current!.value = '';
    this.genreSelect.current!.value = '';
    this.amateurRecordInput.current!.checked = false;
    this.studioRecordInput.current!.checked = false;
    this.coverInput.current!.value = '';
    this.isPublicInput.current!.checked = false;
    this.perfomerInput.current!.value = '';
  }

  validateForm() {
    this.clearErrorMessages();
    let isFormValid = true;
    if (!this.titleInput.current!.value) {
      this.setState((prevState) => {
        return { ...prevState, titleErrorMessage: true };
      });
      isFormValid = false;
    }
    if (!this.releaseDateInput.current!.value) {
      this.setState((prevState) => {
        return { ...prevState, releaseDateErrorMessage: true };
      });
      isFormValid = false;
    }
    if (!this.perfomerInput.current!.value) {
      this.setState((prevState) => {
        return { ...prevState, performerErrorMessage: true };
      });
      isFormValid = false;
    }

    if (!this.genreSelect.current!.value) {
      this.setState((prevState) => {
        return { ...prevState, genreErrorMessage: true };
      });
      isFormValid = false;
    }
    if (this.studioRecordInput.current!.checked || this.amateurRecordInput.current!.checked) {
    } else {
      this.setState((prevState) => {
        return { ...prevState, recordQualityErrorMessage: true };
      });
      isFormValid = false;
    }
    return isFormValid;
  }

  clearErrorMessages() {
    this.setState({
      titleErrorMessage: false,
      performerErrorMessage: false,
      releaseDateErrorMessage: false,
      genreErrorMessage: false,
      recordQualityErrorMessage: false,
    });
  }

  render(): React.ReactNode {
    return (
      <form className="bg-white max-w-2xl p-4 mx-auto mb-10" onSubmit={this.handleSubmit}>
        <h2 className="text-xl pb-2 mb-2 text-center font-bold border-b-2">Add new audio</h2>
        <div className="flex gap-4 mb-6">
          <div className="w-1/2 flex flex-col gap-2">
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" aria-label="Title" inputRef={this.titleInput} />
              {this.state.titleErrorMessage && <FormErrorMessage>Type a title</FormErrorMessage>}
            </FormControl>
            <FormControl>
              <FormLabel>Perfomer</FormLabel>
              <Input type="text" aria-label="Perfomer" inputRef={this.perfomerInput} />
              {this.state.performerErrorMessage && (
                <FormErrorMessage>Type a perfomer</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Release Date</FormLabel>
              <Input inputRef={this.releaseDateInput} aria-label="Release Date" type="date" />
              {this.state.releaseDateErrorMessage && (
                <FormErrorMessage>Select a date</FormErrorMessage>
              )}
            </FormControl>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <FormControl>
              <FormLabel>Genre:</FormLabel>
              <Select name="countrySelect" inputRef={this.genreSelect} aria-label="Genre">
                {GENRES.map((genre) => (
                  <option key={`genre_${genre}`} value={genre}>
                    {genre.toUpperCase()}
                  </option>
                ))}
              </Select>
              {this.state.genreErrorMessage && <FormErrorMessage>Select a genre</FormErrorMessage>}
            </FormControl>
            <FormControl>
              <FormLabel>Record Quality:</FormLabel>
              <RadioGroup>
                <Radio
                  value="studio"
                  name="recordQuality"
                  aria-label="Studio"
                  inputRef={this.studioRecordInput}
                >
                  Studio
                </Radio>
                <Radio
                  value="amateur"
                  name="recordQuality"
                  aria-label="Amateur"
                  inputRef={this.amateurRecordInput}
                >
                  Amateur
                </Radio>
              </RadioGroup>
              {this.state.recordQualityErrorMessage && (
                <FormErrorMessage>Select a record quality</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Cover:</FormLabel>
              <Input type="file" aria-label="Cover" inputRef={this.coverInput}></Input>
            </FormControl>
          </div>
        </div>

        <FormControl>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button>Submit</Button>
            <Checkbox aria-label="Public" inputRef={this.isPublicInput}>
              Public
            </Checkbox>
          </div>
        </FormControl>
      </form>
    );
  }
}

export default Form;
