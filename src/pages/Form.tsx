import { AudioCardList, Form } from 'components';
import React, { Component, ReactNode } from 'react';
import { IAudio } from 'types';

interface IFormPageState {
  audios: IAudio[];
}
class FormPage extends Component<Record<string, never>, IFormPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      audios: [],
    };
    this.addAudio = this.addAudio.bind(this);
  }

  addAudio(newAudio: Omit<IAudio, 'id'>) {
    this.setState((state) => ({
      audios: [...state.audios, { id: state.audios.length + 1, ...newAudio }],
    }));
  }

  render(): ReactNode {
    return (
      <div className="p-4">
        <Form addAudio={this.addAudio}></Form>
        <AudioCardList audios={this.state.audios} />
      </div>
    );
  }
}

export default FormPage;
