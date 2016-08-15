/**
 * Created by Yi on 16/8/15.
 */
import IndexPage from './pages/index.vue';
import AboutPage from './pages/about.vue';

export default (router)=>router.map({
    '/': {
        name: 'index',
        component: IndexPage
    },
    '/about': {
        name: 'about',
        component: AboutPage
    }
})