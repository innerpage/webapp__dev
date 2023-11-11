import { newSpecPage } from '@stencil/core/testing';
import { VUpgrade } from '../v-upgrade';

describe('v-upgrade', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VUpgrade],
      html: `<v-upgrade></v-upgrade>`,
    });
    expect(page.root).toEqualHtml(`
      <v-upgrade>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-upgrade>
    `);
  });
});
