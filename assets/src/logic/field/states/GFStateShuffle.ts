import {GFState} from "./GFState";
import { Cell } from "../../cell/Cell";
import {GFStateIdle} from "./GFStateIdle";
import EventManager from "../../EventManager";
import {GFStateSequenceHit} from "./GFStateSequenceHit";
import {Tile} from "../../tiles/Tile";

export class GFStateShuffle extends GFState {
    static ID = GFStateShuffle.name;

    onEnter() {
        let tiles: Tile[] = [];
        let cells: Cell[] = [];
        this.context.eachCell((cell: Cell) => {
            let tile = cell.tile;
            if (!tile)
                return;
            if (tile.isColor || tile.isBonus) {
                cells.push(cell);
                tiles.push(tile);
            }
        });

        tiles.sort(() => Math.random() - 0.5);
        cells.forEach((cell, i) => {
            let tile = tiles.pop();
            tile?.rebind(cell);
        });

        EventManager.dispatch(this.id);
    }

    next() {
        this.context.toState(GFStateSequenceHit);
    }

    onExit() {

    }
}
