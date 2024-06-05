import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { revalidatePath } from "next/cache";
  
  
  interface ICourse {
    id:number,
    name:string,
    email:string
  }

  export default async function ListCourse() {
    const students = await list()
    async function list(){
     revalidatePath("/admin/courses")
     const response = await fetch("https://serverkuki.vercel.app/courses");
     return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Cursos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            {/* <TableHead>Email</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((item:ICourse) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              {/* <TableCell>{item.email}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  