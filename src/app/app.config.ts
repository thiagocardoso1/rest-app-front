import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        providePrimeNG({
            theme: { preset: aura },
            license:
                'eyJpZCI6ImRlOGJhODk5LWU1MzYtNGY3Mi05M2Y5LTVjZDA2MDFmNmM4NiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTA2NDIzMzgsImV4cCI6MTgyMjE3ODMzOH0.GiqCjN4IS036UEkcNyA4yB6RTGCa9uMvbAjgRCwQYQptvu3cmjW_YHDB99EI68ADex1g2g3WJZp6F6anJ-PrAg',
        }),
    ],
};
