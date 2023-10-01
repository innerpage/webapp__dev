import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() variant: string = 'default';
  @Prop() theme: string = 'default';
  @Prop() url: string = '';

  @Watch('variant') variantPropWatcher(newValue: string, oldValue: string) {
    if (newValue != oldValue) {
      this.updateCssClassString();
    }
  }

  private cssStyleString: string = '';

  componentWillLoad() {
    this.generateCssClassString();
  }

  generateCssClassString() {
    if (this.variant === 'navLink') {
      this.cssStyleString = this.cssStyleString + ` nav__link`;
    } else if (this.variant === 'navLink_Active') {
      this.cssStyleString = this.cssStyleString + ` nav__link--active`;
    } else if (this.variant === 'card') {
      this.cssStyleString = `${this.cssStyleString} link__card`;
    }

    if (this.theme === 'danger') {
      this.cssStyleString = this.cssStyleString + ` danger`;
    }
  }

  updateCssClassString() {
    if (this.variant === 'navLink') {
      this.cssStyleString.replace('nav__link--active', 'nav__link');
    } else if (this.variant === 'navLink_Active') {
      this.cssStyleString.replace('nav__link', 'nav__link--active');
    }
  }

  render() {
    return (
      <div class={this.cssStyleString}>
        <stencil-route-link style={{ color: 'red' }} url={this.url}>
          <slot />
        </stencil-route-link>
      </div>
    );
  }
}
