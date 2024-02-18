import AbstractShareButton from "./abstractShareButton";

export default abstract class AbstractShareButtonLink extends AbstractShareButton {
  url: string;

  constructor(classname: string, url: string) {
    super(classname);
    this.url = url;
  }

  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);

  }
};