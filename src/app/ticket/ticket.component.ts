import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Output() clickChange = new EventEmitter();
  @Input() ticketData;
  @Input() ticketIndex: number = 0;
  public ticketService: TicketService;
  private beingEdited: boolean = false;
  public beingEditedCallback = () => this.beingEdited = !this.beingEdited;
  constructor(_ticketService: TicketService) {
    this.ticketService = _ticketService;
  }

  ngOnInit() {
    console.log("aaaa");
    console.log(this.ticketService);
  }

  clickChanged() {
    this.clickChange.emit(this.ticketIndex);
  }

}
