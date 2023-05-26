import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/DashboardView.vue";
import About from "../views/AboutView.vue";
import Contacts from "../views/ContactsView.vue";
import Manage from "../views/ManageView.vue";
import Marketing from "../views/MarketingView.vue";
import Sales from "../views/SalesView.vue";
import Security from "../views/SecurityView.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {path:"/",component:HomeView},
    {path:"/about",component:About},
    {path:"/contacts",component:Contacts},
    {path:"/manage",component:Manage},
    {path:"/marketing",component:Marketing},
    {path:"/sales",component:Sales},
    {path:"/security",component:Security}
  ],
});

export default router;
