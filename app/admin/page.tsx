

import { Button } from "@/components/ui/button";

export default function Admin() {
    return (
        <div>
            <h1 className="text-center">Bem Vindo à Área Administrativa</h1>
            <Button>Salvar</Button>
            <Button variant="destructive" >Excluir</Button>
            <Button variant="secondary" >Novo</Button>
           
        </div>

    )
}