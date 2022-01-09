import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { CancelOptions, LocalNotificationDescriptor, LocalNotifications, Schedule } from '@capacitor/local-notifications';
import { PlantsService } from '../services/plants.service';

@Injectable()
export class NotificationsService {


  ask: boolean = true;
  ids: any = [];

  constructor() {

  }

  async scheduleAll(plants: Array<any>) {
    let pending = await LocalNotifications.getPending();
    if (pending.notifications.length == 0) {
      for (let plant of plants) {
        this.schedule(plant);
      }
    }
  }

  async schedule(plant: any) {

    //TESTS
    // const weeklyTest: Schedule = {
    //   repeats: true,
    //   every: 'minute',
    // };

    // const hourlyTest: Schedule = {
    //   repeats: true,
    //   every: 'hour',
    // };

    const daily: Schedule = {
      repeats: true,
      every: 'day',
      on: {
        day: 1,
        hour: 8
      }
    };

    const weekly: Schedule = {
      repeats: true,
      every: 'week',
      on: {
        day: 1,
        hour: 8
      }
    };

    const monthly: Schedule = {
      repeats: true,
      every: 'month',
      on: {
        day: 1,
        hour: 8
      }
    };

    let sch = weekly;
    // TEST
    // if(plant.schedule == 'daily') {}
    //   sch = hourlyTest;
    // }
    if(plant.schedule == 'daily') {
      sch = daily;
    }
    if(plant.schedule == 'monthly') {
      sch = monthly;
    }

    if (this.ask) {
      this.ask = false;
      await LocalNotifications.requestPermissions();
    }
    let id = Math.floor(Math.random() * 60 * 1000 + 1);

    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Planter',
          body: `Time to water your ${plant.name}`,
          id: id,
          schedule: sch,
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null,
        }
      ],
    });
  }

  async cancel() {
    try {
      let pending = await LocalNotifications.getPending();
      if (pending != null && pending.notifications.length > 0) {
        await LocalNotifications.cancel(pending);
      } 
    } catch {
      console.log('ignoring cancel error');
    }   
  }

}


