import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Home } from '@primeicons/angular/home';
import { Sidebar } from '@primeicons/angular/sidebar';
import { RouterOutlet } from '@angular/router';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { LabelModule } from 'primeng/label';
import { FormsModule } from '@angular/forms';
import { Refresh } from '@primeicons/angular';

@Component({
    imports: [
        RouterOutlet,
        AvatarModule,
        SidebarModule,
        ButtonModule,
        Home,
        Refresh,
        Sidebar,
        AutoComplete,
        LabelModule,
        FormsModule,
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

    value: string | undefined;
    filteredItems: string[] = [];
    items: string[] = [
        'angular signals tutorial',
        'angular vs react 2026',
        'angular native crash course',
        'angular v22 new features',
        'angular testing library guide',
        'angular router v22 tutorial',
        'angular performance optimization',
        'angular lazy loading modules',
        'angular form validation',
        'angular design patterns',
        'angular authentication tutorial',
        'angular with typescript beginner',
        'angular animation libraries',
        'angular deploy to production',
    ];
    search(event: AutoCompleteCompleteEvent) {
        const query = event.query.toLowerCase();

        this.filteredItems = query
            ? this.items.filter((item) => item.toLowerCase().includes(query))
            : [...this.items];
    }
}
