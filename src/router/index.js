import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RangeTransition from '@/components/RangeTransition';
import swipe from '@/views/swipe';

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/range',
            name: 'RangeTransition',
            component: RangeTransition
        },
        {
            path: '/swipe',
            name: 'swipe',
            component: swipe
        }
    ]
})