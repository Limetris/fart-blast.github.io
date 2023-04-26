import {GFState} from "./GFState";
import { Cell } from "../../cell/Cell";
import {GFStateIdle} from "./GFStateIdle";
import EventManager from "../../EventManager";
import {GFStateSequenceHit} from "./GFStateSequenceHit";

export class GFStateDrop extends GFState {
    static ID = GFStateDrop.name;

    onEnter() {
        this.context.eachColumn(column => column.drop());
        this.context.eachColumn(column => column.fill());

        EventManager.dispatch(this.id);
    }

    next() {
        this.context.toState(GFStateSequenceHit);
    }

    onExit() {

    }
}
