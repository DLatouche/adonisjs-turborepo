import { useEffect } from "react";
import { roles, User } from "@repo/type";
export const App = () => {
  useEffect(() => {
    fetch("http://localhost:6001")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Si le retour est au format JSON
      })
      .then((data) => {
        console.log(data); // Affiche les données récupérées
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET:", error);
      });
  }, []);
  const user: User = {
    id: "1",
    role: roles.admin,
  };
  console.log("App.tsx (19) ->a", user);
  return <div>helloà</div>;
};
