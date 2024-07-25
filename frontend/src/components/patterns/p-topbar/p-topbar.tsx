import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "p-topbar",
  styleUrl: "p-topbar.css",
  shadow: true,
})
export class PTopbar {
  render() {
    return (
      <Host>
        <l-row justifyContent="space-between" align="center">
          <e-link url="/">
            <div class="show-on-mobile">
              <e-img src="../../assets/logomark.svg" width="2em"></e-img>
            </div>
            <div class="show-on-desktop">
              <e-img src="../../assets/logotype.svg" width="8em"></e-img>
            </div>
          </e-link>
          <e-link url="/support-us">Support Us</e-link>
          <p-user-control></p-user-control>
        </l-row>
      </Host>
    );
  }
}
