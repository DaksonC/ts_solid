import EventHandler from "../Events/eventHandler";
import AbstractShareButton from "../abstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {

  constructor(eventHandler: EventHandler, className: string) {
    super(eventHandler, className);
  }

  createAction(): any {
    return () => window.print();
  }
};