import { Button } from "@etiqa-regional/edc-ui-components/button";
import axios from "axios";

export const App = () => {
  const handleAPI = async () => {
    const response = await axios.post("/api/mock/create", {
      method: "GET",
      endpoint: "/opencover",
      response: { title: "This is opencover" },
    });

    console.log("API RESPONSE =>", response);
  };

  return <Button onClick={handleAPI}>Click me</Button>;
};
