import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <header className="flex justify-between items-center p-4 bg-gray-900">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
        <nav>
          <Link href="/auth/signup" className="mr-4 text-blue-400 hover:text-blue-300">
            Regístrate
          </Link>
          <Link href="/auth/login" className="text-blue-400 hover:text-blue-300">
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center">
        <h2 className="text-2xl font-bold">Bienvenido a la Página Principal</h2>
      </main>
    </div>
  );
}

export default HomePage;