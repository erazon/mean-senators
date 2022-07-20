import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SenatorDataService } from '../senator-data.service';
import { Senator } from '../senator.model';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css']
})
export class SenatorComponent implements OnInit {
  senator: Senator = new Senator();
  pageMessage!: string;

  constructor(private _senatorDataService:SenatorDataService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    let senatorId = this._route.snapshot.params['senatorId'];
    this._senatorDataService.getOneSenator(senatorId).subscribe(senator=>{
      console.log(senator);
      this.senator = senator;
    })
  }
  
  onDeleteClick(senatorId:string): void {
    this._senatorDataService.deleteOneSenator(senatorId).subscribe({
      next:(deletedSenator)=>{
        console.log('deleted senator', deletedSenator);
        this._router.navigate(['senators']);
      },
      error: (err)=>{
        console.log('delete failed', err);
        this.pageMessage = 'Delete failed';
      }
    })
  }
}
