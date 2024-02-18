import AbstractShareButtonLink from "../abstractShareButtonLink";

export default class ShareButtonLinkedin extends AbstractShareButtonLink {

  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://linkedin.com/share?url=${this.url}`;
  }
};