import Aside from "./components/Aside";
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
                <div className="flex">
                   <Aside/>
                    {children}
                </div> 
                </div>
            </body>
        </html>
    );
}
