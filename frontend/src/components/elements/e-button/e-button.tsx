import {
  Component,
  Event,
  EventEmitter,
  Watch,
  Prop,
  State,
  h,
} from "@stencil/core";

@Component({
  tag: "e-button",
  styleUrl: "e-button.css",
  shadow: true,
})
export class EButton {
  buttonEl!: HTMLButtonElement;

  @Prop() action: string;
  @Prop() value: any;
  @Prop() variant: string = "primary";
  @Prop() size: string = "default";
  @Prop() disabled: boolean = false;
  @Prop() active: boolean = false;
  @Prop() theme: string = "default";

  @State() isActive: boolean = false;
  @State() classes: string = "";

  @Event({
    eventName: "buttonClick",
    bubbles: true,
  })
  buttonClickEventEmitter: EventEmitter;

  @Watch("active") actionWatcher(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      this.isActive = newVal;
      this.generateClasses();
    }
  }

  private handleButtonClick(e) {
    e.preventDefault();
    this.buttonClickEventEmitter.emit({
      action: this.action,
      value: this.value,
    });
  }

  componentWillLoad() {
    this.isActive = this.active;
    this.generateClasses();
  }

  generateClasses() {
    this.classes = `button__${this.variant}--${this.theme} button__${this.size}--${this.theme}`;
    if (this.isActive) {
      this.classes = `${this.classes} button--active`;
    }
  }

  render() {
    return (
      <button
        class={this.classes}
        onClick={(e) => this.handleButtonClick(e)}
        disabled={this.disabled || this.isActive}
        ref={(el) => (this.buttonEl = el as HTMLButtonElement)}
      >
        {this.isActive ? <p-spinner></p-spinner> : <slot />}
      </button>
    );
  }
}
