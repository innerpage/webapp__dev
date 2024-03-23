import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-oauth-button',
  styleUrl: 'p-oauth-button.css',
  shadow: true,
})
export class POauthButton {
  googleOauthButton!: HTMLDivElement;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Prop() variant: string = 'google';

  @State() isGoogleOauthLoaded: boolean = false;

  private _window: any;

  componentDidLoad() {
    this._window = window as any;
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

      await this._window.google.accounts.id.initialize({
        client_id: state.googleClientId,
        callback: response => {
          this.event_RouteTo.emit({
            type: 'push',
            route: '/post-oauth',
            data: {
              type: 'google',
              token: response.credential,
            },
          });
        },
      });

      await this._window.google.accounts.id.renderButton(this.googleOauthButton, {
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
      return <div ref={el => (this.googleOauthButton = el as HTMLDivElement)}></div>;
    }
  }
}
