import { Component, Event, EventEmitter, Prop, Host, h } from "@stencil/core";
import { Var } from "../../../global/script";

@Component({
  tag: "p-oauth-button",
  styleUrl: "p-oauth-button.css",
  shadow: true,
})
export class POauthButton {
  @Event({
    eventName: "routeToEvent",
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  @Prop() variant: string = "google";

  googleOauthButtonEl!: HTMLDivElement;
  private window: any;

  componentDidLoad() {
    this.window = window;
    this.initGoogleOauth();
  }

  loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async initGoogleOauth() {
    const isScriptLoaded = await this.loadScript(
      "https://accounts.google.com/gsi/client"
    );

    if (!isScriptLoaded) {
      console.log("Failed to load GSI client");
      return;
    }

    await this.window.google.accounts.id.initialize({
      client_id: Var.keys.oauth.google.clientId,
      callback: (response) => {
        this.routeToEvent.emit({
          type: "push",
          route: "/post-oauth",
          data: {
            type: "google",
            token: response.credential,
          },
        });
      },
    });

    await this.window.google.accounts.id.renderButton(
      this.googleOauthButtonEl,
      {
        type: "standard",
        theme: "outline",
        size: "large",
        width: 250,
      }
    );
  }

  render() {
    return (
      <Host>
        {this.variant === "google" && (
          <div
            ref={(el) => (this.googleOauthButtonEl = el as HTMLDivElement)}
          ></div>
        )}
      </Host>
    );
  }
}
