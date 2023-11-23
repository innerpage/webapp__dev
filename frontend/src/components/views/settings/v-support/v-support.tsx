import { Component, Host, h } from '@stencil/core';
import { Vars, state } from '../../../../global/script';

@Component({
  tag: 'v-support',
  styleUrl: 'v-support.css',
  shadow: true,
})
export class VSupport {
  componentWillLoad() {
    state.activeView = 'support';
  }

  render() {
    return (
      <Host>
        <p-sidebar></p-sidebar>
        <c-main>
          <e-text variant="heading">Support</e-text>
          <l-spacer value={0.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={2}></l-spacer>
          <c-card>
            <e-text>
              <l-row>
                To report bugs or request new features, kindly drop a mail at:&nbsp;
                <e-link variant="email" url={`mailto:${Vars.support.email}`}>
                  {Vars.support.email}
                </e-link>
              </l-row>
            </e-text>
          </c-card>
        </c-main>
      </Host>
    );
  }
}
