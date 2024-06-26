import { Component, Listen, Host, State, h } from "@stencil/core";
import { Store } from "../../../global/script";
import "@phosphor-icons/webcomponents";
import { gsap } from "gsap";

@Component({
  tag: "p-user-control",
  styleUrl: "p-user-control.css",
  shadow: true,
})
export class PUserControl {
  @Listen("buttonClick") async handleButtonClick(e) {
    if (e.detail.action === "toggleUserControl") {
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
    this.tl.to(this.userControlCardEl, { display: "block", duration: 0 });
    this.tl.to(this.userControlCardEl, {
      height: "auto",
      paddingTop: "1em",
      opacity: 1,
      duration: 0.15,
    });
  }

  collapseUserControl() {
    this.tl.to(this.userControlCardEl, {
      height: "0px",
      paddingTop: "0em",
      opacity: 0,
      duration: 0.15,
    });
    this.tl.to(this.userControlCardEl, { display: "none", duration: 0 });
  }

  render() {
    return (
      <Host>
        <e-button variant="link" action="toggleUserControl">
          <l-row align="center">
            <e-text>{Store.userName}</e-text>
            <l-spacer value={0.25} variant="horizontal"></l-spacer>
            {this.isExpanded ? (
              <ph-caret-up color="var(--color__blue--200)"></ph-caret-up>
            ) : (
              <ph-caret-down color="var(--color__blue--200)"></ph-caret-down>
            )}
          </l-row>
        </e-button>
        <c-card ref={(el) => (this.userControlCardEl = el as HTMLCCardElement)}>
          <e-list>
            <e-list-item>
              <e-link url="/home">
                <l-row align="center">
                  <ph-house color="var(--color__blue--200)"></ph-house>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text>Home</e-text>
                </l-row>
              </e-link>
            </e-list-item>
            <e-list-item>
              <e-link url="/account">
                <l-row align="center">
                  <ph-user color="var(--color__blue--200)"></ph-user>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text>Account</e-text>
                </l-row>
              </e-link>
            </e-list-item>
            <e-list-item>
              <e-link url="/contact">
                <l-row align="center">
                  <ph-phone color="var(--color__blue--200)"></ph-phone>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text>Contact</e-text>
                </l-row>
              </e-link>
            </e-list-item>
            <e-list-item>
              <e-button variant="link" action="logout">
                <l-row>
                  <ph-sign-out color="var(--color__blue--200)"></ph-sign-out>
                  <l-spacer value={0.25} variant="horizontal"></l-spacer>
                  <e-text>Logout</e-text>
                </l-row>
              </e-button>
            </e-list-item>
          </e-list>
        </c-card>
      </Host>
    );
  }
}
