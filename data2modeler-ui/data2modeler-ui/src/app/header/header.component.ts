import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Initialize Bootstrap components
    this.renderer.listen('window', 'DOMContentLoaded', () => {
      // Initialize Bootstrap navbar toggle
      const navToggles = document.querySelectorAll('.navbar-toggler');
      navToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
          const target = toggle.getAttribute('data-bs-target');
          if (target !== null) {
            const collapse = document.querySelector(target);
            if (collapse) {
              collapse.classList.toggle('show');
            }
          }
        });
      });
    });
  }
}
