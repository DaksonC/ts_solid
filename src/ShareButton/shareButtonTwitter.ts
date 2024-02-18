import EventHandler from "../Events/eventHandler";
import AbstractShareButtonLink from "../abstractShareButtonLink";

export default class ShareButtonTwitter extends AbstractShareButtonLink {

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
};