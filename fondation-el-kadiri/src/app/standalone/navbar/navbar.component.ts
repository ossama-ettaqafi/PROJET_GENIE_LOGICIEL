// navbar.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact/contact.service';

interface MenuItem {
  label: string;
  link?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private router: Router, private contactService: ContactService) {}

  data: any;

  ngOnInit(): void {
    this.contactService.getData().subscribe(response => {
      this.data = response;
    });
  }

  isActive(link: string): boolean {
    return this.router.isActive(link, true);
  }

  activeMenu: MenuItem[] = [];

  menuItems: MenuItem[] = [
    { label: 'ACCUEIL', link: 'accueil'},
    {
      label: 'QUI SOMMES-NOUS ?',
      children: [
        { label: 'MOT DU PRÉSIDENT', link: 'us/mot-du-president' },
        { label: 'NOTRE HISTOIRE', link: 'notre-histoire' },
        {
          label: 'À PROPOS DE LA FONDATION',
          link: 'us/a-propos-de-la-fondation',
        },
      ],
    },
    {
      label: 'COMMUNICATION',
      children: [
        { label: 'EVENEMENTS', link: 'evenements' },
        { label: 'PUBLICATIONS', link: 'publications' },
        { label: 'PRESSE', link: 'presse' },
      ],
    },
    {
      label: 'NOS PROJETS',
      children: [
        {
          label: 'COMPLEXE CULTUREL',
          children: [
            { label: 'BIBLIOTHÈQUE', link: 'us/bibliotheque' },
            { label: 'SALLES DE CINÉMA', link: 'us/salles-de-cinema' },
            {
              label: 'ATELIERS DE MUSIQUE / PEINTURE',
              link: 'us/ateliers-de-musique-peinture',
            },
            { label: "GALERIE D'EXPOSITION", link: 'us/galerie-exposition' },
            { label: 'AUDITORIUM', link: 'us/auditorium' },
          ],
        },
        {
          label: 'SOUTIEN DE PROGRAMMES CULTURELS',
          link: 'projets/soutien-de-programmes-culturels',
        },
        {
          label: 'SOUTIEN DE PROGRAMMES ÉDUCATIFS',
          link: 'projets/soutien-de-programmes-educatifs',
        },
        { label: 'SOUTIEN SOCIAL', link: 'projets/soutien-scolaire' },
        { label: 'PROMOTION DU SPORT', link: 'projets/promotion-du-sport' },
      ],
    },
    { label: 'AGIR AVEC NOUS', link: 'contact' },
  ];

  onMenuItemHover(menuItem: MenuItem, mouseIn: boolean) {
    // If the mouse is out, clear all active menus
    if (!mouseIn) {
      this.activeMenu = [];
      return;
    }

    // If the clicked menu has children, toggle its state
    if (menuItem.children) {
      const index = this.activeMenu.findIndex(
        (item) => item.label === menuItem.label
      );
      if (index > -1) {
        this.activeMenu.splice(index, 1); // Close the submenu if already open
      } else {
        this.activeMenu.push(menuItem); // Open the submenu
      }
    } else if (menuItem.link) {
      // If the clicked menu has a link, navigate to the link
      // window.location.href = menuItem.link;
    } else {
      // If the clicked menu does not have children and does not have a link, open it and close others
      this.activeMenu = [menuItem];
    }
  }

  isMenuActive(menuItem: MenuItem): boolean {
    return this.activeMenu.some((item) => item.label === menuItem.label);
  }
}
