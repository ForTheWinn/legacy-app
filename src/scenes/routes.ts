export interface RouteProps {
  exact?: boolean;
  name: string;
  path: string;
  component: string;
}

export const routes: RouteProps[] = [
  {
    exact: true,
    name: "Play",
    path: "/",
    component: "./play",
  },
  {
    name: "Results",
    path: "/results",
    component: "./results",
  },
  {
    name: "Entries",
    path: "/entries",
    component: "./entries",
  },
  {
    name: "Maintain",
    path: "/maintain",
    component: "./maintain",
  },
  {
    name: "Transactions",
    path: "/transactions",
    component: "./transactions",
  },
];
