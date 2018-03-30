import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscoveryReadPage } from '../discovery-read/discovery-read';

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html'
})
export class DiscoveryPage {
  constructor(public navCtrl: NavController) {

  }
  goToDiscoveryRead(discovery: any) {
    this.navCtrl.push(DiscoveryReadPage);
  }
}
