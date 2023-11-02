import "@/styles/globals.css";
import "@/styles/imageEditor.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     // Add your own logic here to check if the user is authenticated
  //     const userIsAuthenticated = checkUserAuthentication();

  //     if (!userIsAuthenticated && url === "/demo") {
  //       router.replace("/login");
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);

  return (
    <main className="font-slussenExtended">
      <Component {...pageProps} />
    </main>
  );
}
