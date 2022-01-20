import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverNumber: number = 4;
  servers: Server[] = [
    new Server('Server 1', 'online'),
    new Server('Server 2', 'offline'),
    new Server('Server 3', 'offline'),
  ];
  constructor() {}

  ngOnInit(): void {}

  onTurnOnServer(id: number) {
    this.servers[id].status = 'pending'
    return new Promise((resolve) => {
      setTimeout(() => resolve((this.servers[id].status = 'online')), 3000);
    });
  }

  onTurnOffServer(id: number) {
    this.servers[id].status = 'offline';
  }

  onRemoveServer(id: number){
    this.servers.splice(id, 1)
  }

  onAddServer(){
    const newServer = new Server(
      ("Server " + this.serverNumber.toString()),
      "offline" 
    )
    this.servers.push(newServer)
    this.serverNumber++;
  }

  getBackground(status: string) {
    if (status === 'offline') {
      return 'darkred';
    }
    if (status === 'online') {
      return 'darkgreen';
    }
    if (status === 'pending') {
      return 'darkorange';
    }
    return 'black';
  }
}
