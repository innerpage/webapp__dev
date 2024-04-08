import { Component, Listen, Host, State, h } from '@stencil/core';
import { state } from '../../../global/script';
import '@phosphor-icons/webcomponents';
import { gsap } from 'gsap';

@Component({
  tag: 'p-user-control',
  styleUrl: 'p-user-control.css',
  shadow: true,
})
export class PUserControl {
  @Listen('buttonClick') async handleButtonClick(e) {
    if (e.detail.action === 'toggleUserControl') {
      this.isExpanded = !this.isExpanded;
      if (this.isExpanded) {
        this.expandUserControl();
      } else {
        this.collapseUserControl();
      }
    }
  }

  @State() isExpanded: boolean = false;

  userControlCardEl!: HTMLCCardElement;
  private tl: any = gsap.timeline();

  expandUserControl() {
    this.tl.to(this.userControlCardEl, { display: 'block', duration: 0 });
    this.tl.to(this.userControlCardEl, { height: 'auto', paddingTop: '1em', opacity: 1, duration: 0.15 });
  }

  collapseUserControl() {
    this.tl.to(this.userControlCardEl, { height: '0px', paddingTop: '0em', opacity: 0, duration: 0.15 });
    this.tl.to(this.userControlCardEl, { display: 'none', duration: 0 });
  }

  render() {
    return (
      <Host>
        <e-button variant="link" action="toggleUserControl">
          <l-row align="center">
            <e-text>{state.accountName.split(' ')[0]}</e-text>
            <l-spacer value={0.25} variant="horizontal"></l-spacer>
            {this.isExpanded ? <ph-caret-up></ph-caret-up> : <ph-caret-down></ph-caret-down>}
          </l-row>
        </e-button>
        <c-card ref={el => (this.userControlCardEl = el as HTMLCCardElement)}>
          <e-list>
            <e-list-item>
              <e-link url="/profile">
                <l-row align="center">
                  <ph-user color="var(--color__blue--regular)" weight={state.activeView === 'profile' ? 'fill' : 'regular'}></ph-user>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text>Profile</e-text>
                </l-row>
              </e-link>
            </e-list-item>
            <e-list-item>
              <e-link url="/billing">
                <l-row align="center">
                  <ph-credit-card color="var(--color__blue--regular)" weight={state.activeView === 'billing' ? 'fill' : 'regular'}></ph-credit-card>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text>Billing</e-text>
                </l-row>
              </e-link>
            </e-list-item>
            <l-spacer value={0.5}></l-spacer>
            <l-seperator></l-seperator>
            <l-spacer value={0.5}></l-spacer>
            <e-list-item>
              <e-button variant="link" action="logout">
                <l-row>
                  <ph-sign-out color="var(--color__red--regular)"></ph-sign-out>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text theme="danger">Logout</e-text>
                </l-row>
              </e-button>
            </e-list-item>
          </e-list>
        </c-card>
      </Host>
    );
  }
}
