import { Component } from '@angular/core';
import { FlwbiteService } from '../flwbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private FlwbiteService: FlwbiteService) {}

  ngOnInit(): void {
    this.FlwbiteService.loadFlowbite((flowbite) => {});
  }
}
