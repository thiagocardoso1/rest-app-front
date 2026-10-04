import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    NavigationEnd,
    Router,
    RouterLink,
    RouterOutlet,
} from '@angular/router';
import { Home, Plus, Sidebar, PIcon } from '@primeicons/angular';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { LabelModule } from 'primeng/label';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { filter, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface NavItem {
    id: number;
    label: string;
    routerLink: string;
    active?: boolean;
    icon: string;
}

@Component({
    imports: [
        RouterOutlet,
        RouterLink,
        AvatarModule,
        SidebarModule,
        MenuModule,
        ButtonModule,
        Sidebar,
        LabelModule,
        FormsModule,
        PIcon,
    ],
    selector: 'app-home',
    styleUrl: './home-app.css',
    templateUrl: './home-app.html',
})
export class HomeApp implements OnInit {
    navItems = signal<NavItem[]>([
        {
            id: 1,
            label: 'Home',
            icon: 'home',
            routerLink: '/',
        },
        {
            id: 2,
            label: 'New Post',
            icon: 'plus',
            routerLink: '/create-post',
        },
    ]);

    isMobile = signal(false);
    router = inject(Router);
    destroyRef = inject(DestroyRef);

    ngOnInit() {
        this.setIsMobile();
        this.setActiveNavItems();
    }

    private setIsMobile() {
        if (typeof window === 'undefined') return;
        const mql = window.matchMedia('(max-width: 1023px)');
        this.isMobile.set(mql.matches);
        mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
    }

    private setActiveNavItems() {
        this.router.events
            .pipe(
                map((e) => e instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe(() => this.syncActiveState());
        this.syncActiveState();
    }

    private syncActiveState() {
        const url = this.router.url;
        this.navItems.update((items) =>
            items.map((item) => ({
                ...item,
                active: url === item.routerLink,
            })),
        );
    }
}
