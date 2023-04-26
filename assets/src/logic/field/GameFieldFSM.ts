import {GFStateIdle} from "./states/GFStateIdle";
import {GFStateClick} from "./states/GFStateClick";
import {FSM} from "../fsm/FSM";
import {GFStateGroups} from "./states/GFStateGroups";
import {GFStateHit} from "./states/GFStateHit";
import {GFStateMerge} from "./states/GFStateMerge";
import {GFStateDrop} from "./states/GFStateDrop";
import {GFStateSequenceHit} from "./states/GFStateSequenceHit";
import { GFStateShuffle } from "./states/GFStateShuffle";

export class GameFieldFSM extends FSM {

    constructor() {
        super();
    }

    protected initFsm() {
        this._initStates();
    }

    private _initStates() {
        this.addState(GFStateIdle);
        this.addState(GFStateGroups);
        this.addState(GFStateClick);
        this.addState(GFStateHit);
        this.addState(GFStateMerge);
        this.addState(GFStateDrop);
        this.addState(GFStateShuffle);
        this.addState(GFStateSequenceHit);
    }

}

