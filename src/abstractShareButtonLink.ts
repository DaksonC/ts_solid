import EventHandler from "./Events/eventHandler";
import AbstractShareButton from "./abstractShareButton";

export default abstract class AbstractShareButtonLink extends AbstractShareButton {
  url: string;

  constructor(eventHandler: EventHandler, classname: string, url: string) {
    super(eventHandler, classname);
    this.url = url;
  }

  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);

  }
};