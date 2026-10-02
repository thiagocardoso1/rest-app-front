import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Home } from '@primeicons/angular/home';
import { Plus } from '@primeicons/angular/plus';
import { Sidebar } from '@primeicons/angular/sidebar';
import {
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
} from '@angular/router';
import { LabelModule } from 'primeng/label';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [
        RouterOutlet,
        AvatarModule,
        SidebarModule,
        ButtonModule,
        Home,
        Plus,
        Sidebar,
        LabelModule,
        FormsModule,
        RouterLinkWithHref,
        RouterLinkActive,
    ],
    standalone: true,
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    isMobile = signal(false);

    constructor() {
        if (typeof window === 'undefined') return;
        const mql = window.matchMedia('(max-width: 1023px)');
        this.isMobile.set(mql.matches);
        mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
    }
}
