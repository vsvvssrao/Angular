import { Component } from '@angular/core';

@Component({
    // selector:'app-server',
    selector:'[app-server]',
    templateUrl:'./server.component.html',

})
export class ServerComponent{
serverId:number = 1;
serverStatus:string ='offline';
}