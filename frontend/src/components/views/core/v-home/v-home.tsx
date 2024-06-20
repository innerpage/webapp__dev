import { Component, Host, FunctionalComponent, h } from "@stencil/core";
import { Store } from "../../../../global/script";

@Component({
  tag: "v-home",
  styleUrl: "v-home.css",
  shadow: true,
})
export class VHome {
  componentWillLoad() {
    Store.activeView = "home";
  }

  SessionView: FunctionalComponent = () => [<e-text>Gallery of notes</e-text>];

  NonSessionView: FunctionalComponent = () => (
    <e-textarea placeholder="Pour your thoughts.."></e-textarea>
  );

  render() {
    return (
      <Host>
        <p-topbar></p-topbar>
        <c-content-area>
          <c-main>
            {Store.isSessionActive ? (
              <this.SessionView></this.SessionView>
            ) : (
              <this.NonSessionView></this.NonSessionView>
            )}
          </c-main>
        </c-content-area>
      </Host>
    );
  }
}
