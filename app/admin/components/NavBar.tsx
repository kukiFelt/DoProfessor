import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavBar() {
    return (
        <div className="flex justify-between p-6 border-b-2">
            <h1>Logo</h1>
            <a href="/admin">Home</a>
            <a href="/admin/student">Navegar Estudantes</a>
            <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/81537071?v=4" alt="@shadcn" />
                <AvatarFallback>AJR</AvatarFallback>
            </Avatar>
        </div>
    )
}