import EventHandler from "./eventHandler";

export default abstract class AbstractShareButton {
  className: string;
  url: string;
  eventHandler: EventHandler;

  constructor(className: string, url: string) {
    this.className = className;
    this.url = url;
    this.eventHandler = new EventHandler();
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();

    this.eventHandler.addEventListenerToClass(this.className, "click", () => {
      window.open(link);
    });
  }
};