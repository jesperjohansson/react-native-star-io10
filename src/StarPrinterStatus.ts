export class StarPrinterStatus {
    _hasError: boolean = true;
    _coverOpen: boolean = false;
    _drawerOpenCloseSignal: boolean = false;
    _paperEmpty: boolean = false;
    _paperNearEmpty: boolean = false;

    get hasError(): boolean {
        return this._hasError;
    }
    
    get coverOpen(): boolean {
        return this._coverOpen;
    }

    get drawerOpenCloseSignal(): boolean {
        return this._drawerOpenCloseSignal;
    }

    get paperEmpty(): boolean {
        return this._paperEmpty;
    }

    get paperNearEmpty(): boolean {
        return this._paperNearEmpty;
    }
}