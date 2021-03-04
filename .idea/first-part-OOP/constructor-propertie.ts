class Message{
    private _title:string;
    private _message:string;
    private _isSent:boolean;
    private deliveryDate: Date;

    constructor(title: string, message: string, isSent: boolean) {
        this._title = title;
        this._message = message;
        this._isSent = isSent;
    }

    previewMessage(): string {
        return this._message.slice(0,10).concat('...');
    }

    get messageStatus(): string {
        const sentMessage = this.isSent ? 'Has been sent.' : 'has not been sent.';
        return '${this.message} | ${sentMessage}';
    }


    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get isSent(): boolean {
        return this._isSent;
    }

    set isSent(value: boolean) {

        if(value === true) {
            this.deliveryDate = new Date();
        }
        this._isSent = value;
    }
}

message.isSent = true;
const message = new Message(
    'Helllo',
    'World',
    true);

message.previewMessage();

