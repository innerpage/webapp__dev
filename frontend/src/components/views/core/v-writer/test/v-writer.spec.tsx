import { newSpecPage } from '@stencil/core/testing';
import { VWriter } from '../v-writer';

describe('v-writer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VWriter],
      html: `<v-writer></v-writer>`,
    });
    expect(page.root).toEqualHtml(`
      <v-writer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-writer>
    `);
  });
});
