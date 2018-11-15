import { Injectable } from '@angular/core';

export class Ticket {
  private _name: String;
  private _description: String;
  private _url: String;
  private _removed: boolean;

  constructor(name: String, description: String, url: String, removed: boolean) {
    this._name = name;
    this._description = description;
    this._url = url;
    this._removed = removed;
  }

  set removed(remove: boolean) {
    console.log("remove was called");
    this._removed = remove;
  }

  get name() { return this._name; }
  get description() { return this._description; }
  get url() { return this._url; }
  get removed() { return this._removed; }
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private _tickets: Array<Ticket>;
  private _backgroundProcessingMock: Promise<Object> = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 5000);
  });
  constructor() {
    console.log("init");
    this._tickets =
      [new Ticket("despicable me 2", " movie description", "assets/notFound.jpg", false),
      new Ticket("despicable me ", " movie description", "assets/notFound.jpg", false),
      new Ticket("despicable me 3 ", " movie description", "assets/notFound.jpg", false)];

    console.log("tickets from constructor " + JSON.stringify(this._tickets, null, 2));
  }

  remove(index, callback) {
    console.log("callback " + callback);
    callback();
    this._backgroundProcessingMock
      .then((res) => {
        callback();
        this._tickets.slice(index, 1);
        let currTicket = this._tickets[index];
        currTicket.removed = true;
        console.log("removed " + index);
        console.log("tickets " + JSON.stringify(this._tickets, null, 2));
      })
      .catch((err) => console.log(err));
  }

  edit(index, callBack) {

  }

  get ticketList() {
    console.log("ticketList " + JSON.stringify(this._tickets, null, 2));
    return this._tickets;
  }


}
