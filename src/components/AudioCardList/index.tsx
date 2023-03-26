import AudioCard from 'components/AudioCard';
import React, { Component } from 'react';
import { IAudio } from 'types';

interface IAudioCardListProps {
  audios: IAudio[];
}

class AudioCardList extends Component<IAudioCardListProps> {
  render() {
    return (
      <div className="flex flex-wrap gap-4">
        {this.props.audios.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </div>
    );
  }
}

export default AudioCardList;
