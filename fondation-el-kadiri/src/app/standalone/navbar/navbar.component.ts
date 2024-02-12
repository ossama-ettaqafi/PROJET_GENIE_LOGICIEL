// navbar.component.ts

// Importation des modules nécessaires depuis Angular Core
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Importation du service ContactService depuis le chemin spécifié
import { ContactService } from 'src/app/services/contact/contact.service';

// Définition d'une interface pour les éléments de menu
interface MenuItem {
  label: string; // Libellé de l'élément de menu
  link?: string; // Lien associé à l'élément de menu (optionnel)
  children?: MenuItem[]; // Sous-menus de l'élément de menu (optionnel)
}

// Définition du composant Angular avec le sélecteur 'app-navbar'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', // Template HTML associé au composant
  styleUrls: ['./navbar.component.css'], // Feuilles de style CSS associées au composant
})
export class NavbarComponent {

  // Constructeur du composant avec l'injection des dépendances Router et ContactService
  constructor(private router: Router, private contactService: ContactService) {}

  // Propriété pour stocker les données récupérées du service
  data: any;

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Appel du service ContactService pour récupérer des données
    this.contactService.getData().subscribe(response => {
      this.data = response; // Assignation des données récupérées à la propriété 'data'
    });
  }

  // Méthode pour vérifier si un lien est actif dans la barre de navigation
  isActive(link: string): boolean {
    return this.router.isActive(link, true); // Vérifie si le lien est actif dans le routeur Angular
  }

  // Propriété pour stocker les éléments de menu actifs
  activeMenu: MenuItem[] = [];

  // Définition des éléments de menu avec leurs libellés et leurs liens ou sous-menus
  menuItems: MenuItem[] = [
    { label: 'ACCUEIL', link: 'accueil'}, // Premier élément de menu avec un lien direct
    {
      label: 'QUI SOMMES-NOUS ?', // Deuxième élément de menu avec des sous-menus
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

  // Méthode appelée lors du survol d'un élément de menu
  onMenuItemHover(menuItem: MenuItem, mouseIn: boolean) {
    // Si la souris est en dehors, effacer tous les menus actifs
    if (!mouseIn) {
      this.activeMenu = [];
      return;
    }

    // Si l'élément de menu a des sous-menus, basculer son état
    if (menuItem.children) {
      const index = this.activeMenu.findIndex(
        (item) => item.label === menuItem.label
      );
      if (index > -1) {
        this.activeMenu.splice(index, 1); // Fermer le sous-menu s'il est déjà ouvert
      } else {
        this.activeMenu.push(menuItem); // Ouvrir le sous-menu
      }
    } else if (menuItem.link) {
      // Si l'élément de menu a un lien, naviguer vers ce lien
      // window.location.href = menuItem.link; // (Commenté, probablement pas nécessaire pour Angular)
    } else {
      // Si l'élément de menu n'a pas de sous-menus et n'a pas de lien, l'ouvrir et fermer les autres
      this.activeMenu = [menuItem];
    }
  }

  // Méthode pour vérifier si un élément de menu est actif
  isMenuActive(menuItem: MenuItem): boolean {
    return this.activeMenu.some((item) => item.label === menuItem.label);
  }
}
