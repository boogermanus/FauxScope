import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {

  expanded = true;
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.expanded = this.settingsService.get();
  }

  public onCollapse(): void {
    this.expanded = false;
    this.settingsService.save();
  }
}
