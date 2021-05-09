import store from "../store";

export default async function user({ next, router }) {
  try {
    if (!store.getters.isAuthenticated) {
      return router.push({ name: "Login" });
    }

    await store.dispatch("profile/me");
    const me = await store.getters["profile/me"];

    if (me.role_id !== 2) {
      return router.push({ path: "/dashboard" });
    }

    return next();
  } catch( error ) {
    localStorage.clear();
    location.reload();
  }
}
