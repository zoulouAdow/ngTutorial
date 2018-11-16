import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  public ticketList: Array<Ticket>;

  constructor(public ticketService: TicketService) { }

  ngOnInit() {
    this.ticketList = this.ticketService.ticketList;
  }

  showMsg(index) {
    console.log(`ticket ${index} was clicked`);
  }



}
