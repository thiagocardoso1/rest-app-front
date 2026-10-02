import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Home, Plus, Refresh } from '@primeicons/angular';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { LabelModule } from 'primeng/label';

@Component({
    imports: [Refresh, AutoComplete, FormsModule, ButtonModule, LabelModule],
    selector: 'app-check-status',
    styleUrl: './check-status.css',
    templateUrl: './check-status.html',
})
export class CheckStatus {
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
