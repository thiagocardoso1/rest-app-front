import { Routes } from '@angular/router';
import { CreatePost } from './components/create-post/create-post';
import { CheckStatus } from './components/check-status/check-status';
import { HomeApp } from './components/home-app/home-app';

export const routes: Routes = [
    {
        path: '',
        title: 'RestAppFront',
        component: HomeApp,
        children: [
            {
                path: '',
                title: 'Check Status',
                component: CheckStatus,
            },
            {
                path: 'create-post',
                title: 'New Post',
                component: CreatePost,
            },
        ],
    },
];
