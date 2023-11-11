import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-spinner',
  styleUrl: 'p-spinner.css',
  shadow: true,
})
export class PSpinner {
  @Prop() theme: string = 'default';

  render() {
    return (
      <div class={`${this.theme}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
