import { Component, OnInit } from '@angular/core';
import { SenatorDataService } from '../senator-data.service';
import { Senator } from '../senator.model';

@Component({
  selector: 'app-senators',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit {
  senators: Senator[] = [];

  constructor(private _senatorDataService: SenatorDataService) { }

  ngOnInit(): void {
    this._senatorDataService.getAllSenators().subscribe(senators=>this.senators=senators);
  }

}
