export class StopAction {
    type: string = "rorate";
    payload: boolean = false;
    constructor(type: string, payload: boolean) {
        this.type = type;
        this.payload = payload;
    }
}