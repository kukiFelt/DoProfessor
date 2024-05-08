import NavBar from "./components/NavBar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                <div>
                   <NavBar/>
                    {children}
                </div>
            </body>
        </html>
    );
}
