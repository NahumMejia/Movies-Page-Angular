import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Toolbar } from 'primeng/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  imports: [
    Toolbar,
    ButtonModule,
    InputTextModule,
    IconField,
    InputIcon,
    DrawerModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  public visible: boolean = false;

  menuItems = [
    { label: 'Home', icon: 'pi pi-home', route: '/' },
    { label: 'Popular', icon: 'pi pi-star', route: '/popular' },
    { label: 'Top Rated', icon: 'pi pi-thumbs-up', route: '/top-rated' },
  ];
}
