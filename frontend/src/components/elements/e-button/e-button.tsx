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
  @State() width: string = '';
  @State() height: string = '';

  @Event({
    eventName: 'buttonClick',
    bubbles: true,
  })
  event_ButtonClick: EventEmitter;

  @Watch('active') watch_ActionStatus(val_New: boolean, val_Old: boolean) {
    if (val_New != val_Old) {
      this.inAction = val_New;
    }
  }

  private handle_ButtonClick(e) {
    e.preventDefault();
    this.event_ButtonClick.emit({
      action: this.action,
      value: this.value,
    });
  }

  private styleClasses: string = '';

  componentWillLoad() {
    this.inAction = this.active;
    this.generate_StyleClasses();
  }

  componentDidLoad() {
    this.width = `${this.buttonEl.getBoundingClientRect().width}px`;
    this.height = `${this.buttonEl.getBoundingClientRect().height}px`;
  }

  generate_StyleClasses() {
    this.styleClasses = `${this.variant}--${this.theme} ${this.size}`;
  }

  render() {
    return (
      <button
        class={`${this.styleClasses} ${this.inAction && 'in-action'}`}
        onClick={e => this.handle_ButtonClick(e)}
        disabled={this.disabled || this.inAction}
        ref={el => (this.buttonEl = el as HTMLButtonElement)}
        style={{ width: this.width, height: this.height }}
      >
        {this.inAction ? <p-spinner></p-spinner> : <slot />}
      </button>
    );
  }
}
