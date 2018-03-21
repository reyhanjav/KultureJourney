import { Component } from '@angular/core';

import { DiscoveryPage } from '../discovery/discovery';
import { BookmarkPage } from '../bookmark/bookmark';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiscoveryPage;
  tab3Root = BookmarkPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
