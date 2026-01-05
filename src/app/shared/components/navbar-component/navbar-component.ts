import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { Toolbar } from 'primeng/toolbar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar-component',
  imports: [
    Toolbar,
    ButtonModule,
    InputTextModule,
    DrawerModule,
    RouterLink,
    CommonModule,
    FloatLabel,
    FormsModule,
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  private router = inject(Router);

  public visible: boolean = false;
  public searchQuery: string = '';

  menuItems = [
    { label: 'Home', icon: 'pi pi-home', route: '/' },
    { label: 'Popular', icon: 'pi pi-star', route: '/popular' },
    { label: 'Top Rated', icon: 'pi pi-thumbs-up', route: '/top-rated' },
  ];

  protected onSearch(): void {
    if (this.searchQuery.trim().length === 0) return;

    this.router.navigate(['/search'], {
      queryParams: { q: this.searchQuery },
    });
  }
}
