import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-spinner',
  styleUrl: 'p-spinner.css',
  shadow: true,
})
export class PSpinner {
  @Prop() theme: string = 'light';

  render() {
    return (
      <div class={`spinner spinner--${this.theme}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
