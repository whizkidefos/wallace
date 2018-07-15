import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PortfolioOne from './views/PortfolioOne.vue'
import PortfolioTwo from './views/PortfolioTwo.vue'
import PortfolioThree from './views/PortfolioThree.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio/one',
      name: 'portfolio-one',
      component: PortfolioOne
    },
    {
      path: '/portfolio/two',
      name: 'portfolio-two',
      component: PortfolioTwo
    },
    {
      path: '/portfolio/three',
      name: 'portfolio-three',
      component: PortfolioThree
    }
  ],
  mode: 'history'
})
