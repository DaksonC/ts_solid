import AbstractShareButton from "../abstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {

  constructor(className: string, url: string) {
    super(className, url);
  }

  createLink(): string {
    return `https://facebook.com/share?url=${this.url}`;
  }
};