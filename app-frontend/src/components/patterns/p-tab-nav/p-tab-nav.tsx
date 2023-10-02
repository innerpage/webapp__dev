import { Component, FunctionalComponent, Prop, h } from '@stencil/core';
import { state } from '../../../global/script';

@Component({
  tag: 'p-tab-nav',
  styleUrl: 'p-tab-nav.css',
  shadow: true,
})
export class PTabNav {
  @Prop() location: string;

  SettingsTabNav: FunctionalComponent = () => (
    <l-row>
      <e-link url="/profile" variant={state.activeView === 'profile' ? 'tabLinkActive' : 'tabLink'}>
        Profile
      </e-link>
      <e-link url="/billing" variant={state.activeView === 'billing' ? 'tabLinkActive' : 'tabLink'}>
        Billing
      </e-link>
      <e-link url="/upgrade" variant={state.activeView === 'upgrade' ? 'tabLinkActive' : 'tabLink'}>
        Upgrade
      </e-link>
      <e-link url="/support" variant={state.activeView === 'support' ? 'tabLinkActive' : 'tabLink'}>
        Support
      </e-link>
    </l-row>
  );

  render() {
    if (this.location === 'settings') {
      return <this.SettingsTabNav></this.SettingsTabNav>;
    }
  }
}
