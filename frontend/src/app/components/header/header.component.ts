import { Component, OnInit } from '@angular/core';
import { HeaderData } from './header-data-model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private readonly headerService: HeaderService) {}

  ngOnInit(): void {
  }

  get headerData(): HeaderData {
    return this.headerService.headerData;
  }
}
