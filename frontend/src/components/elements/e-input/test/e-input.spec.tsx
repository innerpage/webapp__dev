import { newSpecPage } from '@stencil/core/testing';
import { EInput } from '../e-input';

describe('e-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EInput],
      html: `<e-input></e-input>`,
    });
    expect(page.root).toEqualHtml(`
      <e-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-input>
    `);
  });
});
