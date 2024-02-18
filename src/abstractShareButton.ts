import EventHandler from "./eventHandler";

export default abstract class AbstractShareButton {
  className: string;
  eventHandler: EventHandler;

  constructor(className: string) {
    this.className = className;
    this.eventHandler = new EventHandler();
  }

  abstract createAction(): any;

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, "click", action);
  }
};