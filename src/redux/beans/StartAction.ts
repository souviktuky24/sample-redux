export class StartAction {
    type: string = "rorate";
    payload: boolean = true;
    constructor(type: string, payload: boolean) {
        this.type = type;
        this.payload = payload;
    }
}