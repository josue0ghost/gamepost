import store from "../store";

export default function guest({ next, router }) {
  try {
    if (store.getters.isAuthenticated) {
      return router.push({ path: "/home" });
    }
  
    return next();
  } catch(error) {
    localStorage.clear();
    location.reload();
  }
}
