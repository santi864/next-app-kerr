"use client";
import { Boton } from "./components/ui/Boton";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl font-bold text-gray-800 my-4">
          404 - No Encontrado
        </h1>
        <hr />
        <p className="text-base mt-4 text-gray-800">
          La página que buscas no existe
        </p>
        <Boton onClick={() => router.back()} className="mt-4">
          Volver
        </Boton>
      </main>
    </>
  );
}
