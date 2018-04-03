import { Component, OnInit } from '@angular/core';
import {MessageService} from './messages.services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  constructor(private messagesService: MessageService) { }

  async ngOnInit() {
    var response = await this.messagesService.getMessages()
    // console.log(response.json());
    this.messages = response.json()

  }
  messages=[];
}
