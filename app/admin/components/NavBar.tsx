export default function NavBar() {
    return (
        <div className="flex justify-between p-6 border-b-2">
            <h1>Logo</h1>
            <a href="/admin">Home</a>
            <a href="/admin/student">Navegar Estudantes</a>
            <h1>Avatar</h1>
        </div>
    )
}