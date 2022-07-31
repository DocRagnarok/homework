import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/store/store.service';

@Component({
  selector: 'app-rxjs-train',
  templateUrl: './rxjs-train.component.html',
  styleUrls: ['./rxjs-train.component.css']
})
export class RxjsTrainComponent implements OnInit {

  constructor(public store: StoreService) { 
    
  }

  ngOnInit(): void {
  }

}
