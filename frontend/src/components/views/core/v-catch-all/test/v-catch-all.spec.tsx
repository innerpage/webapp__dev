import { newSpecPage } from '@stencil/core/testing';
import { VCatchAll } from '../v-catch-all';

describe('v-catch-all', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCatchAll],
      html: `<v-catch-all></v-catch-all>`,
    });
    expect(page.root).toEqualHtml(`
      <v-catch-all>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-catch-all>
    `);
  });
});
