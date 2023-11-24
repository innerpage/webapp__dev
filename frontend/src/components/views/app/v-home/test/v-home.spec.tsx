import { newSpecPage } from '@stencil/core/testing';
import { VHome } from '../v-home';

describe('v-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VHome],
      html: `<v-home></v-home>`,
    });
    expect(page.root).toEqualHtml(`
      <v-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-home>
    `);
  });
});
