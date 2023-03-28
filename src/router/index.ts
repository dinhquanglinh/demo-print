import Vue from "vue";
import VueRouter from "vue-router";
import authenticateRoutes from "@/router/authenticate-routes";
import authenticatedRoutes from "@/router/authenticated-routes";
import publicRoutes from "@/router/public-routes";

import { getAccessToken, setToken } from "@/services/axios";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        ...publicRoutes,
        ...authenticateRoutes,
        ...authenticatedRoutes,
        {
            path: "/*",
            name: "NotFound",
            component: () =>
                import(
                    /* webpackChunkName: "portal" */ "@/views/404/Error404.vue"
                ),
        },
    ],
});

router.beforeEach((to, from, next) => {
    const tokenRedirect = new URLSearchParams(window.location.search).get(
        "token"
    );

    const langSearchParams: any = to.query?.lang || null;

    const token = tokenRedirect ? tokenRedirect : getAccessToken();

    if (tokenRedirect) {
        setToken(tokenRedirect);
    }

    if(langSearchParams) {
        localStorage.setItem('locale', langSearchParams)
    }

    window.scrollTo({ top: 0 });
    
    const hasMeta = (name: string): boolean =>
        to.matched.some((record) => record.meta[name]);

    if (hasMeta("authenticated") && token == null) {
        next({ name: "Login" });
    }

    if (hasMeta("guest") && token != null) {
        next({ name: "Home" });
    }
    next();
});

export default router;
