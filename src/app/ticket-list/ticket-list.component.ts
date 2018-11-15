import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../services/ticket.service';
import { APIHelperService } from '../services/apihelper.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public ticketList: Array<Ticket>;
  public username:String;
  public password:String;
  public logged:boolean =false;
  constructor(public ticketService: TicketService, public apiHelper: APIHelperService) {

  }

  ngOnInit() {
    this.ticketList = this.ticketService.ticketList;
    this.apiHelper.login((res) => {
      this.logged = res.success;
      console.log("server answered "+this.logged);
      console.log(JSON.stringify(res, null, 2));
    
    },
    "admin",
    "password");
  }
  showMsg(index) {
    console.log(`ticket ${index} was clicked`);
  }
}
