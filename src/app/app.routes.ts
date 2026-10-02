import { Routes } from '@angular/router';
import { CreatePost } from './components/create-post/create-post';
import { CheckStatus } from './components/check-status/check-status';

export const routes: Routes = [
    { path: '', title: 'RestAppFront', component: CheckStatus },
    { path: 'create-post', title: 'New Post', component: CreatePost },
];
