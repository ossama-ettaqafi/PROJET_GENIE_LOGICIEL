# Plateforme de la Fondation Abdelouahed El Kadiri
<div align="center">
 <h3>Réutilisation et finalisation d'un site web incomplet</h3>
 <img src="https://i.ibb.co/khjsXb6/logo-2x.png" alt="Fondation Abdelouahed El Kadiri" border="0" height="100px">

 <p> Notre projet en génie logiciel consiste à réutiliser une plateforme déjà développée et livrée, mais qui ne satisfait pas les besoins du client. La plateforme présente plusieurs bugs et échecs. Notre tâche est donc de la réutiliser et de la finaliser, en appliquant toutes nos connaissances en génie logiciel, afin de livrer un produit parfait. Nous suivrons des étapes bien régulées pour atteindre cet objectif. </p>
</div>

### Table des matières
1. [Introduction](#introduction)
2. [Description générale du projet](#description)
3. [Exigences fonctionnelles](#fonctionnelles)
4. [Exigences non-fonctionnelles](#non-fonctionnelles)
5. [Exigences techniques](#techniques)
6. [Design et expérience utilisateur](#design)
7. [Contenu](#contenu)
8. [Plan de développement et de mise en œuvre](#plan)
9. [Tests et validation](#tests)
10. [Maintenance et support](#maintenance)

### 1. Introduction <a name="introduction"></a>
- Objectif du cahier des charges : Ce document vise à définir les spécifications et les exigences pour le développement et l'amélioration du site web existant.
- Contexte du projet : Le projet s'inscrit dans une démarche d'amélioration continue d'un site web pour répondre aux besoins évolutifs des utilisateurs et renforcer sa compétitivité.
- Périmètre du site web : Le site web est dédié à une fondation spécifique et vise à informer les visiteurs sur les missions, les projets, les actions et les valeurs de ladite fondation.

### 2. Description générale du projet <a name="description"></a>
- Description du projet : Le projet consiste à améliorer les fonctionnalités, le design et les performances du site web existant afin d'optimiser l'expérience utilisateur.
- Utilisateurs cibles : Le site vise tous les utilisateurs d'Internet intéressés par les actions et les valeurs de la Fondation Abdelouahed El Kadiri, y compris les donateurs potentiels, les bénéficiaires des actions de la fondation, les partenaires institutionnels, ainsi que toute personne souhaitant s'informer sur les missions et les projets de la fondation.
- Fonctionnalités principales : Les principales fonctionnalités comprennent l'amélioration de la navigation, du design, de la vitesse de chargement, ainsi que l'accessibilité aux informations et aux données.

### 3. Exigences fonctionnelles <a name="fonctionnelles"></a>
- Liste des fonctionnalités requises :
  - Système de navigation clair et intuitif permettant aux utilisateurs de trouver facilement les informations recherchées.
  - Design attrayant et professionnel reflétant l'identité visuelle de la fondation et favorisant l'engagement des utilisateurs.
  - Optimisation de la vitesse de chargement des pages pour offrir une expérience fluide et rapide.
  - Accessibilité renforcée pour permettre à tous les utilisateurs, y compris ceux avec des besoins spécifiques, d'accéder au contenu du site web.
  - Section de présentation des missions, des projets et des actions de la fondation pour informer les visiteurs sur son travail.
  - Intégration de témoignages et de réussites pour illustrer l'impact des actions de la fondation.
  - Section actualités et événements pour tenir les visiteurs informés des dernières activités et initiatives de la fondation.
  - Formulaire de contact et de demande d'information pour faciliter la communication avec la fondation.
- Exigences de navigation : La navigation doit être intuitive et permettre aux utilisateurs de trouver rapidement les informations recherchées. Cela inclut la mise en place d'un menu clair et bien organisé, des liens cohérents entre les différentes sections du site, ainsi que des outils de recherche efficaces pour faciliter la découverte du contenu.
- Gestion du contenu : Les fonctionnalités de gestion de contenu doivent permettre aux administrateurs du site de créer, modifier et supprimer facilement les pages, les articles, les images et autres éléments du site.

### 4. Exigences Non-Fonctionnelles <a name="non-fonctionnelles"></a>

#### 4.1 Convivialité
- Le site doit offrir une expérience utilisateur conviviale, avec une interface intuitive et facile à utiliser.
- Les éléments de navigation doivent être clairs et bien organisés, facilitant ainsi la recherche d'informations pour les utilisateurs.

#### 4.2 Performance
- Le temps de chargement des pages ne doit pas dépasser 3 secondes pour garantir une expérience utilisateur fluide et agréable.
- Le site doit être capable de gérer un volume important de trafic sans compromettre ses performances.

#### 4.3 Sécurité
- Le site doit être sécurisé contre les attaques informatiques et les vulnérabilités potentielles.
- Les données des utilisateurs doivent être protégées et cryptées conformément aux normes de sécurité en vigueur.

#### 4.4 Disponibilité
- Le site doit être disponible 24 heures sur 24 et 7 jours sur 7, avec un temps d'indisponibilité minimal pour assurer un accès continu aux utilisateurs.

#### 4.5 Accessibilité
- Le site doit être accessible à tous les utilisateurs, y compris ceux ayant des besoins spécifiques tels que les personnes en situation de handicap.
- Des fonctionnalités d'accessibilité telles que le contraste des couleurs, la taille du texte réglable et la navigation au clavier doivent être mises en œuvre.

#### 4.6 Scalabilité
- Le site doit être conçu de manière à être évolutif, capable de s'adapter à l'augmentation du nombre d'utilisateurs et de fonctionnalités sans compromettre ses performances.

#### 4.7 Compatibilité
- Le site doit être compatible avec les principaux navigateurs web tels que Google Chrome, Mozilla Firefox, Microsoft Edge et Safari, ainsi qu'avec les différents appareils (ordinateurs de bureau, tablettes, smartphones).

#### 4.8 Documentation
- Une documentation détaillée du site web, comprenant des guides d'utilisation et des instructions de maintenance, doit être fournie pour faciliter sa gestion et son évolution ultérieure.

### 5. Exigences techniques <a name="techniques"></a>
- Plateforme de développement : Le site sera développé en utilisant les langages de programmation HTML, CSS, JavaScript ainsi que le framework Angular et Bootstrap pour le développement front-end. Pour le développement back-end, Express sera utilisé pour gérer les requêtes HTTP et envoyer des emails à l'adresse électronique de la fondation.
- Hébergement et infrastructure : Le site sera hébergé sur AWS (Amazon Web Services) avec une configuration optimisée pour garantir disponibilité et performance. L'infrastructure comprendra des instances EC2 pour le serveur web, et des services de mise en cache pour des temps de chargement rapides. (Facultatif, nécessite un budget)
- Intégration avec d'autres systèmes : Si nécessaire, le site devra s'intégrer avec des systèmes tiers tels que des services de paiement en ligne pour le traitement des dons, des outils d'analyse pour le suivi des performances du site, ainsi que des plateformes de médias sociaux pour faciliter le partage de contenu et l'engagement des utilisateurs.

### 6. Design et expérience utilisateur <a name="design"></a>
- Wireframes ou maquettes : Des wireframes ou maquettes seront créés pour visualiser l'apparence et le flux de navigation du site, fournissant ainsi une représentation visuelle des différentes pages et de leur disposition.
- Conception visuelle : La conception visuelle doit inclure une palette de couleurs harmonieuse, une typographie appropriée, ainsi que des éléments graphiques cohérents pour créer une identité visuelle attrayante et professionnelle.
- Expérience utilisateur : L'expérience utilisateur sera optimisée pour garantir une navigation fluide et intuitive, avec une attention particulière portée à l'ergonomie, à la clarté des informations et à la facilité d'utilisation des fonctionnalités principales.

### 7. Contenu <a name="contenu"></a>
- Types de contenu : Le site comportera différents types de contenu, tels que du texte, des images, des vidéos, des articles, des témoignages, etc., permettant ainsi de présenter de manière variée les informations sur la fondation et ses activités.
- Exigences en matière de création et de gestion de contenu : Les utilisateurs auront différents niveaux d'accès et de permissions. Les administrateurs auront des privilèges complets, tandis que les contributeurs ou éditeurs auront des autorisations limitées. Il est recommandé d'utiliser des fichiers JSON pour permettre la modification, l'ajout ou la suppression de données de manière dynamique et sécurisée, directement depuis le site.

### 8. Plan de développement et de mise en œuvre <a name="plan"></a>
- Phases de développement : Le développement sera divisé en différentes phases, chacune ayant des objectifs spécifiques et des jalons clés à atteindre pour progresser vers l'achèvement du projet.
- Planning de développement : Le planning prévoit des dates de début et de fin pour chaque phase du projet, permettant ainsi de suivre efficacement l'avancement des travaux et de respecter les délais fixés.
- Ressources nécessaires : Les ressources requises pour mener à bien le projet comprennent du personnel qualifié, du matériel informatique adéquat ainsi que des logiciels nécessaires pour le développement, le test et le déploiement du site web.
- Budget et coûts estimés : Le budget prévu pour l'ensemble du projet est de 0 DH, comprenant une allocation supplémentaire de 1000 DH pour l'hébergement et 3000 DH pour la mise en place d'un tableau de bord permettant aux administrateurs de gérer tous les aspects dynamiques du site de manière efficace. Ce budget englobe les coûts à l'achat de matériel et de logiciels, ainsi que les frais de développement, de test et de maintenance du site web.

### 9. Tests et validation <a name="tests"></a>
- Plan de test : Un plan de test sera élaboré pour vérifier que toutes les fonctionnalités sont opérationnelles.
- Procédures de validation : Les fonctionnalités seront validées avec les utilisateurs finaux pour s'assurer de leur conformité aux attentes.
- Correction des bugs : Les bugs et les problèmes identifiés seront corrigés avant le déploiement.

### 10. Maintenance et support <a name="maintenance"></a>
- Plan de maintenance : Un plan de maintenance sera établi pour assurer le bon fonctionnement continu du site après son lancement.
- Support utilisateur : Un support utilisateur sera disponible pour répondre aux questions et résoudre les problèmes des utilisateurs.
- Mises à jour futures : Des mises à jour régulières seront planifiées pour ajouter de nouvelles fonctionnalités et améliorer le site au fil du temps.
