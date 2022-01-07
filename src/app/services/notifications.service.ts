import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { CancelOptions, LocalNotificationDescriptor, LocalNotificationRequest, LocalNotifications, Schedule } from '@capacitor/local-notifications';
import { PlantsService } from '../services/plants.service';

@Injectable()
export class NotificationsService {

  ask: boolean = true;
  ids: any = [];

  constructor() {

  }

  async schedule(plant: any) {

    const weeklyTest: Schedule = {
      repeats: true,
      every: 'minute',
    };

    const weekly: Schedule = {
      repeats: true,
      every: 'week',
      on: {
        day: 1
      }
    };

    if (this.ask) {
      this.ask = false;
      await LocalNotifications.requestPermissions();
    }

    let id = Math.floor(Math.random() * 60 * 1000 + 1);
   
    await LocalNotifications.schedule({
      notifications: [
        //weekly
        {
          title: 'Planter',
          body: `Time to water your ${plant.title}`,
          id: id,
          schedule: weeklyTest,
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null,
        },
        // //8 days
        // {
        //   title: 'Planter',
        //   body: 'Time to water your (plant)!',
        //   id: Math.floor(Math.random() * 1000 + 1),
        //   sound: null,
        //   attachments: null,
        //   actionTypeId: '',
        //   extra: null,
        // },
        // //3.5 days
        // {
        //   title: 'Planter',
        //   body: 'Time to water your (plant)!',
        //   id: Math.floor(Math.random() * 1000 + 1),
        //   sound: null,
        //   attachments: null,
        //   actionTypeId: '',
        //   extra: null,
        // },
      ],
    });

  }

  async cancel() {

    const notifications: LocalNotificationRequest[] = []; 
    let pending = await LocalNotifications.getPending();
    for(let note of pending.notifications) {
        notifications.push(note);
    }
    await LocalNotifications.cancel({notifications});

            
    //       res.notifications = res.notifications.filter(i => i.id == this.notificationId);
    //         if(res.notifications.length>0)
    //         LocalNotifications.cancel(res);
    //         else
    //        {
    //         console.log('notification length zero');
    //        }
    //       }, err => {
    //         console.log(err);
    //       })

    // const cancels: CancelOptions[] = [];
    // for(let id of this.ids) {
    //   cancels.push(`${id}`);
    // }
    // await LocalNotifications.cancel(cancels};
  }

}


