import { createRouter , createWebHistory } from "vue-router";
import HomePage from "./pages/home.vue";
import TransactionsPage from "./pages/transactions.vue";
import BudgetsPage from "./pages/budgets.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import NotFoundPage from "./pages/404.vue";

const routes = [
  {
    path: "/",
    name: "overview-route",
    component: HomePage
  },
  {
    path: "/transactions",
    name: "transactions-route",
    component: TransactionsPage
  },
  {
    path: "/transactions/:id",
    name: "transaction-details-route",
    component: TransactionDetail
  },
  {
    path: "/budgets",
    component: BudgetsPage
  },
  {
    path: "/ts",
    redirect: "/transactions"
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage
  },
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
