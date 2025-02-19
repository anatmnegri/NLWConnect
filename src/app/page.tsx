import { ArrowRight, Mail, Radio, User } from "lucide-react";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight className="size-6" />
      </Button>
      <IconButton>
        <Mail />
      </IconButton>
    </main>
  );
}
