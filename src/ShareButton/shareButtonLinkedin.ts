import AbstractShareButton from "../abstractShareButton";

export default class ShareButtonLinkedin extends AbstractShareButton {

  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://linkedin.com/share?url=${this.url}`;
  }
};