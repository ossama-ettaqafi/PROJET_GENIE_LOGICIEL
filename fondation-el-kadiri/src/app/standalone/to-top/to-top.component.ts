import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.css']
})
export class ToTopComponent {
  // Show or hide the "Top" button based on scroll position
  @HostListener('window:scroll', [])
  onScroll(): void {
    const button = document.getElementById('topBtn');
    if (button) {
      button.style.display = (window.scrollY > 100) ? 'block' : 'none';
    }
  }

  // Scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
