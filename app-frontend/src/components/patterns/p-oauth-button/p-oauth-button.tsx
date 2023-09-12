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
    eventName: 'googleOAuthInitializationEvent',
    bubbles: true,
  })
  googleOAuthInitializationEventEmitter: EventEmitter;

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
          this.googleOAuthInitializationEventEmitter.emit({
            googleJwt: response.credential,
          });
        },
      });

      await this._window.google.accounts.id.renderButton(this.googleOauthButton, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
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
