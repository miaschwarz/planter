import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable()
export class NotificationsService {
  
  constructor(){}
  
  async showLocalNotification(id : number, title : string, text : string){
  
  LocalNotifications.schedule({
    notifications: [
      {
        title: 'Title',
        body: 'Body',
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
        sound: null,
        attachments: null,
        actionTypeId: '',
        extra: null,
      },
    ],
  });
}
}
