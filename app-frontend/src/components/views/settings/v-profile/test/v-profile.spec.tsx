import { newSpecPage } from '@stencil/core/testing';
import { VProfile } from '../v-profile';

describe('v-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VProfile],
      html: `<v-profile></v-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <v-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-profile>
    `);
  });
});
