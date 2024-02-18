import AbstractShareButtonLink from "../abstractShareButtonLink";

export default class ShareButtonFacebook extends AbstractShareButtonLink {

  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://facebook.com/share?url=${this.url}`;
  }
};