import store from "../store";

export default function auth({ next, router }) {
  try {
    if (!store.getters.isAuthenticated) {
      return router.push({ name: "Login" });
    }
  
    return next(); 
  } catch(error) {
    localStorage.clear();
    location.reload();
  }
}
