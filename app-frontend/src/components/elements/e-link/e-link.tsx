import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() variant: string = 'default';
  @Prop() theme: string = 'default';
  @Prop() url: string = '';

  private styleClasses: string = '';

  componentWillLoad() {
    this.generateStyles();
  }

  generateStyles() {
    if (this.variant === 'navLink') {
      this.styleClasses = this.styleClasses + ` nav__link`;
    } else if (this.variant === 'navLink_Active') {
      this.styleClasses = this.styleClasses + ` nav__link--active`;
    } else if (this.variant === 'card') {
      this.styleClasses = `${this.styleClasses} link__card`;
    }

    if (this.theme === 'danger') {
      this.styleClasses = this.styleClasses + ` danger`;
    }
  }

  render() {
    return <stencil-route-link class={this.styleClasses} url={this.url}></stencil-route-link>;
  }
}
