import { Component, Prop, Host, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'l-spacer',
  styleUrl: 'l-spacer.css',
  shadow: true,
})
export class LSpacer {
  @Prop() value: number = 1;
  @Prop() variant: string = 'vertical';

  private styleObj: LooseObject = {};

  componentWillLoad() {
    if (this.variant === 'vertical') {
      this.styleObj.marginTop = `${this.value}em`;
      this.styleObj.marginBottom = `${this.value}em`;
    } else if (this.variant === 'horizontal') {
      this.styleObj.marginLeft = `${this.value}em`;
      this.styleObj.marginRight = `${this.value}em`;
    }
  }

  render() {
    return <Host style={this.styleObj}></Host>;
  }
}
