import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'l-seperator',
  styleUrl: 'l-seperator.css',
  shadow: true,
})
export class LSeperator {
  @Prop() variant: string = 'default';
  render() {
    if (this.variant === 'default') {
      return <div id="seperator_default"></div>;
    } else if (this.variant === 'oauth') {
      return (
        <div id="seperator__oauth">
          <div class="seperator__oauth--lines"></div>
          <c-text>OR</c-text>
          <div class="seperator__oauth--lines"></div>
        </div>
      );
    }
  }
}
