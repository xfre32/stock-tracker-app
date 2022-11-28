import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LocalStorageService{
    constructor() {}

    public saveData(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public getData(key: string) {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key) ?? '');
        }
        else {
            return undefined;
        }
    }

    public removeData(key: string): void {
        localStorage.removeItem(key);
    }
}