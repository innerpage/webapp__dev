import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-oauth-button',
  styleUrl: 'p-oauth-button.css',
  shadow: true,
})
export class POauthButton {
  googleOauthButtonEl!: HTMLDivElement;

  @Event({
    eventName: 'routeToEvent',
    bubbles: true,
  })
  routeToEvent: EventEmitter;

  @Prop() variant: string = 'google';

  @State() isGoogleOauthLoaded: boolean = false;

  private window: any;

  componentDidLoad() {
    this.window = window as any;
    this.initGoogleOauth();
  }

  loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script');
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
    if (!this.isGoogleOauthLoaded) {
      const isScriptLoaded = await this.loadScript('https://accounts.google.com/gsi/client');

      if (!isScriptLoaded) {
        console.log('Failed to load Google Oauth script');
        return;
      }

      await this.window.google.accounts.id.initialize({
        client_id: state.googleClientId,
        callback: response => {
          this.routeToEvent.emit({
            type: 'push',
            route: '/post-oauth',
            data: {
              type: 'google',
              token: response.credential,
            },
          });
        },
      });

      await this.window.google.accounts.id.renderButton(this.googleOauthButtonEl, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        width: 300,
      });

      this.isGoogleOauthLoaded = true;
    }
  }

  render() {
    if (this.variant === 'google') {
      return <div ref={el => (this.googleOauthButtonEl = el as HTMLDivElement)}></div>;
    }
  }
}
