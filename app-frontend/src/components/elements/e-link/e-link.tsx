import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() variant: string = 'default';
  @Prop() href: string = '';
  @Prop() target: string = '';
  @Prop() theme: string = 'default';
  @Prop() event: boolean = false;
  @Prop() action: string = '';
  @Prop() value: any;

  @Event({
    eventName: 'event_LinkClick',
    bubbles: true,
  })
  event_LinkClick: EventEmitter;

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

  handle_LinkClick(e) {
    e.preventDefault();
    this.event_LinkClick.emit({
      action: this.action,
      value: this.value,
    });
  }

  render() {
    if (this.event) {
      return (
        <a class={this.styleClasses} href="#" onClick={e => this.handle_LinkClick(e)}>
          <slot></slot>
        </a>
      );
    } else {
      return (
        <a class={this.styleClasses} href={this.href} target={this.target}>
          <slot></slot>
        </a>
      );
    }
  }
}
