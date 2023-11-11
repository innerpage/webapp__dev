import { newSpecPage } from '@stencil/core/testing';
import { ESelect } from '../e-select';

describe('e-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ESelect],
      html: `<e-select></e-select>`,
    });
    expect(page.root).toEqualHtml(`
      <e-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-select>
    `);
  });
});
