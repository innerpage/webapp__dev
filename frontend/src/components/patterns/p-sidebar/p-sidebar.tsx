import { Component, Host, h } from "@stencil/core";
import "@phosphor-icons/webcomponents";
import { Store } from "../../../global/script";

@Component({
  tag: "p-sidebar",
  styleUrl: "p-sidebar.css",
  shadow: true,
})
export class PSidebar {
  render() {
    return (
      <Host>
        <l-spacer value={3}></l-spacer>
        <e-list>
          <e-list-item>
            <e-link
              url="/"
              variant={
                Store.activeView === "home" ? "navLinkActive" : "navLink"
              }
            >
              <l-row>
                <ph-house
                  color="var(--color__blue--regular)"
                  weight={Store.activeView === "home" ? "fill" : "regular"}
                ></ph-house>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Home</e-text>
              </l-row>
            </e-link>
          </e-list-item>
          <e-list-item>
            <e-link
              url="/page-1"
              variant={
                Store.activeView === "page1" ? "navLinkActive" : "navLink"
              }
            >
              <l-row>
                <ph-file
                  color="var(--color__blue--regular)"
                  weight={Store.activeView === "page1" ? "fill" : "regular"}
                ></ph-file>
                <l-spacer value={0.25} variant="horizontal"></l-spacer>
                <e-text>Page 1</e-text>
              </l-row>
            </e-link>
          </e-list-item>
        </e-list>
      </Host>
    );
  }
}
