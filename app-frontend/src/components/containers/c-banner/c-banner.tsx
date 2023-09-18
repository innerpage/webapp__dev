import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'c-banner',
  styleUrl: 'c-banner.css',
  shadow: true,
})
export class CBanner {
  @Prop() theme: string = 'default';
  @Prop() position: string = 'bottom';

  private styleClasses: string = 'default';

  componentWillLoad() {
    this.generate_Styles();
  }

  generate_Styles() {
    if (this.theme === 'danger') {
      this.styleClasses = this.styleClasses + ` theme--danger`;
    }

    if (this.position === 'bottom') {
      this.styleClasses = this.styleClasses + ` position--bottom`;
    }
  }

  render() {
    return (
      <div class={this.styleClasses}>
        <slot></slot>
      </div>
    );
  }
}
