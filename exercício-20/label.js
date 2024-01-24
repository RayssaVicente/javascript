import {Component} from "./component.js";

export class label extends Component{
    constructor(text, parent, options){
        super('label', parent, Object.assign({}, options, {textContent: text}))
    }
}