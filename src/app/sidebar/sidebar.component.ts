import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES_MANAGER: RouteInfo[] = [
    { path: '/insert_depense',    title: 'Ajouter Depense',        icon:'nc-money-coins', class: '' },
    { path: '/liste_depense',    title: 'Liste Depense',        icon:'nc-money-coins', class: '' },
    { path: '/liste_employe',    title: 'STATISTIQUE',        icon:'nc-chart-bar-32', class: '' },
        // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },

    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

export const ROUTES_CLIENT: RouteInfo[] = [
    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/insert_rendezvous',    title: 'Nouvel Rendez-vous',        icon:'nc-watch-time', class: '' },
    { path: '/rendezvous',    title: 'Liste Rendez-vous',        icon:'nc-watch-time', class: '' },
    { path: '/liste_preference',    title: 'Liste Preference',        icon:'nc-favourite-28', class: '' },
    { path: '/insert_preference',    title: 'Ajouter Preference',        icon:'nc-favourite-28', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

export let ROUTES: RouteInfo[];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[]=[];
    ngOnInit() {
        const clientDataString = localStorage.getItem('utilisateur');
        const clientData = JSON.parse(clientDataString);
        if(clientData.profil==='manager'){
            ROUTES=ROUTES_MANAGER;
        }
        else{
            ROUTES=ROUTES_CLIENT;
        }
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
