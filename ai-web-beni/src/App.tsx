import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Github } from "lucide-react";
import { Textarea } from "./components/ui/textarea";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 flex items-center justify-between border-b h-16">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤ no NLW da RocketSeat
          </span>

          <Separator orientation="vertical" className="h-8" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
      <main className=" p-6 flex gap-6 flex-1">
        <div className="flex flex-col flex-1 gap-4 ">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA"
            />
            <Textarea placeholder="Resultado gerar pela IA..." readOnly />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-400">{"transcription"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  );
}
