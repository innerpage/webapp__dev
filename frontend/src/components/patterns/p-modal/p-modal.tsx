import { Component, Prop, State, Watch, Host, h } from '@stencil/core';
import { gsap } from 'gsap';

@Component({
  tag: 'p-modal',
  styleUrl: 'p-modal.css',
  shadow: true,
})
export class PModal {
  @Prop() isVisible: boolean = false;
  @Prop() name: string;

  @State() modalName: string;

  @Watch('isVisible') watchIsVisible(newVal: boolean, oldVal: boolean) {
    if (newVal != oldVal) {
      if (newVal) {
        this.showModal();
      } else {
        this.hideModal();
      }
    }
  }

  @Watch('name') watchName(newVal: string, oldVal: string) {
    if (newVal != oldVal) {
      this.modalName = newVal;
    }
  }

  modalHostEl!: HTMLDivElement;
  private tl: any = gsap.timeline();

  showModal() {
    this.tl.to(this.modalHostEl, { display: 'flex', duration: 0 });
    this.tl.to(this.modalHostEl, { opacity: 1, duration: 0.15 });
  }

  hideModal() {
    this.tl.to(this.modalHostEl, { opacity: 0, duration: 0.15 });
    this.tl.to(this.modalHostEl, { display: 'none', duration: 0 });
  }

  render() {
    return (
      <Host ref={el => (this.modalHostEl = el as HTMLDivElement)}>
        <c-card>{this.modalName === 'login' || this.modalName === 'signup' ? <p-auth view={this.modalName}></p-auth> : ''}</c-card>
      </Host>
    );
  }
}
