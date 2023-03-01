import {HasHTMLFormat} from "./HasHtmlFormat.js"


export interface HasRender {
    render(docObj: HasHTMLFormat, docType: string) : void;
}