import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MockProvider} from '../../providers/provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: string[];

  constructor(public navCtrl: NavController, private mockProvider: MockProvider) {
    this.items = mockProvider.getData();
  }

  doInfinite(infiniteScroll) {
    this.mockProvider.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.unshift( newData[i] );
      }

      infiniteScroll.complete();

      if (this.items.length > 90) {
        infiniteScroll.enable(false);
      }
    });
  }
}
