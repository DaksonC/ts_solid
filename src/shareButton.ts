import EventHandler from "./eventHandler";

export default class ShareButton {
  url: string;
  eventHandler: EventHandler;

  constructor(url: string) {
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  bind(className: string, socialNetwork: string) {
    let link: string;
    if (socialNetwork === "twitter") {
      link = `https://twitter.com/share?url=${this.url}`;
    } else if (socialNetwork === "facebook") {
      link = `https://facebook.com/sharer.php?u=${this.url}`;
    } else if (socialNetwork === "linkedin") {
      link = `https://linkedin.com/shareArticle?url=${this.url}`;
    }

    this.eventHandler.addEventListenerToClass(className, "click", () => {
      window.open(link);
    });
  }
};