import AbstractShareButton from "../abstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {

  constructor(url: string, className: string) {
    super(url, className);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
};