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
      this.cssStyleString = this.cssStyleString + ` link__nav`;
    } else if (this.variant === 'navLinkActive') {
      this.cssStyleString = this.cssStyleString + ` link__nav--active`;
    } else if (this.variant === 'card') {
      this.cssStyleString = `${this.cssStyleString} link__card`;
    } else if (this.variant === 'tabLink') {
      this.cssStyleString = `${this.cssStyleString} link__tab`;
    } else if (this.variant === 'tabLinkActive') {
      this.cssStyleString = `${this.cssStyleString} link__tab--active`;
    }

    if (this.theme === 'danger') {
      this.cssStyleString = this.cssStyleString + ` danger`;
    }
  }

  updateCssClassString() {
    if (this.variant === 'navLink') {
      this.cssStyleString.replace('link__nav--active', 'link__nav');
    } else if (this.variant === 'navLinkActive') {
      this.cssStyleString.replace('link__nav', 'link__nav--active');
    }
  }

  render() {
    if (this.variant === 'email') {
      return (
        <div class={this.cssStyleString}>
          <a href={this.url}>
            <slot />
          </a>
        </div>
      );
    } else {
      return (
        <div class={this.cssStyleString}>
          <stencil-route-link url={this.url}>
            <slot />
          </stencil-route-link>
        </div>
      );
    }
  }
}
