import React from "react";

type Props = {
  pregeneratedCount: number
}

type State = {
  generatedNumbers: number[];
}

export class NumberGeneratorClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    for (let i = 0; i < props.pregeneratedCount; i++) {
      this.state = {
        generatedNumbers: [...this.state?.generatedNumbers || [], Math.random()]
      };
    }
  }

  generateNew() {
    this.setState({ generatedNumbers: [...this.state.generatedNumbers, Math.random()] });
  }

  render() {
    const { generatedNumbers } = this.state;
    return <div>
      {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
      <button type="button" onClick={() => this.generateNew()}>Generate new</button>
    </div>
  }
}