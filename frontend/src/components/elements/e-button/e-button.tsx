import { Component, Event, EventEmitter, Watch, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'e-button',
  styleUrl: 'e-button.css',
  shadow: true,
})
export class EButton {
  buttonEl!: HTMLButtonElement;

  @Prop() action: string;
  @Prop() value: any;
  @Prop() variant: string = 'primary';
  @Prop() size: string = 'default';
  @Prop() disabled: boolean = false;
  @Prop() active: boolean = false;
  @Prop() theme: string = 'default';

  @State() inAction: boolean = false;

  @Event({
    eventName: 'buttonClick',
    bubbles: true,
  })
  buttonClickEventEmitter: EventEmitter;

  @Watch('active') actionWatcher(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      this.inAction = newVal;
    }
  }

  private handleButtonClick(e) {
    e.preventDefault();
    this.buttonClickEventEmitter.emit({
      action: this.action,
      value: this.value,
    });
  }

  private styleClasses: string = '';

  componentWillLoad() {
    this.inAction = this.active;
    this.generateStyles();
  }

  generateStyles() {
    this.styleClasses = `${this.variant}--${this.theme} ${this.size}`;
  }

  render() {
    return (
      <button
        class={`${this.styleClasses} ${this.inAction && 'in-action'}`}
        onClick={e => this.handleButtonClick(e)}
        disabled={this.disabled || this.inAction}
        ref={el => (this.buttonEl = el as HTMLButtonElement)}
      >
        {this.inAction ? <p-spinner></p-spinner> : <slot />}
      </button>
    );
  }
}
