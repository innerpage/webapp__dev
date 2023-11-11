import { newSpecPage } from '@stencil/core/testing';
import { VPostOauth } from '../v-post-oauth';

describe('v-post-oauth', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPostOauth],
      html: `<v-post-oauth></v-post-oauth>`,
    });
    expect(page.root).toEqualHtml(`
      <v-post-oauth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-post-oauth>
    `);
  });
});
