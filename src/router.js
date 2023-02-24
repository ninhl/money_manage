import { createRouter , createWebHashHistory } from "vue-router";
import HomePage from "./pages/home.vue";
import TransactionsPage from "./pages/transactions.vue";
import BudgetsPage from "./pages/budgets.vue";


const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/transactions",
    component: TransactionsPage
  },
  {
    path: "/budgets",
    component: BudgetsPage
  },
];

const router = new createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router;
