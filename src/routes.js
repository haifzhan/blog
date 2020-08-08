
import BlogList from './components/BlogList.vue'
import AddBlog from './components/AddBlog.vue'
import BlogDetail from './components/BlogDetail.vue'

export default [
    { path: '', name: 'list', component: BlogList },
    { path: '/new', name: 'new', component: AddBlog },
    { path: '/:id', name: 'detail', component: BlogDetail, props: true },
];