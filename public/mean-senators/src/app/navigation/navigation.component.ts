import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onHomeClick(): void {
    this._router.navigate(['']);
  }

  onSenatorsClick(): void {
    this._router.navigate(['senators']);
  }
}
