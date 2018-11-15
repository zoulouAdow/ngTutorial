import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-container',
  templateUrl: './ticket-container.component.html',
  styleUrls: ['./ticket-container.component.css']
})
export class TicketContainerComponent implements OnInit {

  constructor(ticketService:TicketService) { }

  ngOnInit() {
  }

}
