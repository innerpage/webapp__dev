import { Component, Event, EventEmitter, FunctionalComponent, Watch, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'e-button',
  styleUrl: 'e-button.css',
  shadow: true,
})
export class EButton {
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

  generate_StyleClasses() {
    this.styleClasses = `${this.variant}--${this.theme} ${this.size}`;
  }

  Spinner: FunctionalComponent = () => (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  render() {
    return (
      <button class={`${this.styleClasses} ${this.inAction && 'in-action'}`} onClick={e => this.handle_ButtonClick(e)} disabled={this.disabled || this.inAction}>
        {this.inAction ? <this.Spinner></this.Spinner> : <slot />}
      </button>
    );
  }
}
