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
        <e-list>
          <e-list-item>
            <e-link
              url="/"
              variant="nav"
              active={Store.activeView === "home" ? true : false}
            >
              <l-row justifyContent="normal">
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
              variant="nav"
              active={Store.activeView === "page1" ? true : false}
            >
              <l-row justifyContent="normal">
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
