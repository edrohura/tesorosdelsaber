import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, Heart, Star, Calendar, Clock, MapPin } from 'lucide-react';
import Head from 'next/head';

export default function GraduacionPreescolar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Head>
        <title>Graduación 2024 - Tesoros del Saber</title>
        <meta name="description" content="Página de la graduación de la promoción Preescolar 2024, celebrando los logros de nuestros pequeños estudiantes." />
      </Head>

      {/* Header */}
      <header className="p-5 bg-black text-amber-400">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center font-caveat">Tesoros del Saber</h1>
          <p className="text-center mt-2 text-amber-200">"Tesoros de la sabiduría, el conocimiento y el discernimiento que Dios ofrece a las personas.<br></br>
            Un lugar donde cada estudiante es valorado, donde el aprendizaje y los valores crecen en cada etapa."</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Image
          src="/image/logo_inen.png?text=Logo"
          alt="Logo de Tesoros del Saber"
          width={200}
          height={200}
          className="mx-auto mb-8"
          priority
        />
        <h2 className="text-4xl font-bold mb-4 text-black">¡Celebramos nuestra Graduación!</h2>
        <p className="text-xl mb-8 text-amber-800">Promoción Inicial 2024</p>
        <nav className="mt-4 flex justify-center space-x-6">
          <Link href="/galeria">
            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-500" aria-label="Ver galería de fotos">Ver Galería</Button>
          </Link>
          <Link href="/anuario">
            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-500" aria-label="Ver anuario de graduación">Ver Anuario</Button>
          </Link>
        </nav>
      </section>

      {/* Logros */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-black">Nuestros Logros</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-amber-400">
            <CardContent className="flex flex-col items-center p-6">
              <GraduationCap className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-black">Aprendizaje</h4>
              <p className="text-center text-amber-800">Letras y Números</p>
            </CardContent>
          </Card>
          <Card className="border-amber-400">
            <CardContent className="flex flex-col items-center p-6">
              <Heart className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-black">Amistad</h4>
              <p className="text-center text-amber-800">Nuevos Amigos</p>
            </CardContent>
          </Card>
          <Card className="border-amber-400">
            <CardContent className="flex flex-col items-center p-6">
              <Star className="w-12 h-12 text-amber-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-black">Creatividad</h4>
              <p className="text-center text-amber-800">Arte y Música</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-black">Recuerdos Especiales</h3>
        <div className="relative h-[600px] w-full max-w-3xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`absolute transition-all duration-300 ease-in-out transform
                          hover:z-10 hover:scale-110 hover:shadow-xl
                          ${getRandomPosition(i)}`}
            >
              <Image
                src={`/image/recuerdo${i}.jpeg?text=Foto ${i}`}
                alt={`Recuerdo ${i}`}
                width={250}
                height={250}
                className="rounded-lg border-4 border-amber-400 shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Mensaje de los Maestros */}
      <section className="container mx-auto px-4 py-16 bg-amber-50">
        <h3 className="text-2xl font-bold mb-8 text-center text-black">Dedicatoria de la Profesora</h3>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-4/5">
            <p className="text-lg mb-4 text-amber-800 italic">
              "Queridos pequeños, hoy celebramos sus primeros grandes logros. ¡Siempre recuerden que aprender es una aventura maravillosa!
              Sigan explorando, soñando y creciendo. ¡Felicidades por su graduación! 🎉 🎓"
            </p>
            <p className="text-right text-amber-800 italic">- Directora Administrativa: Isabel BURGOS CÁCERES <br></br>
              - Directora Pedagógica: Elizabeth CASAHUAMAN ALVARADO<br></br>
              - Profesora: Alexandra PIÑA PEIXOTO<br></br>
              - Auxiliares: Noemí GONZÁLEZ RODRÍGUEZ y Otilia PÉREZ PÉREZ</p>
          </div>
          <div className="md:w-1/5">
            <Image
              src="/image/profesora.webp"
              alt="Profesora"
              width={180}
              height={274}
              className="rounded-lg shadow-lg border-8 border-amber-400 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-amber-400 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © 2025 Tesoros del Saber. Una página hecha con el ❤️ por HorusDev.
          </p>
          <p className="text-center mt-2">
            ¡Felicidades a todos nuestros pequeños graduados!
          </p>
        </div>
      </footer>
    </div>
  )
}

function getRandomPosition(index: number) {
  const positions = [
    'top-0 left-0 rotate-[-5deg]',
    'top-10 left-1/4 rotate-[6deg]',
    'top-20 left-2/4 rotate-[-2deg]',
    'top-40 left-10 rotate-[4deg]',
    'top-60 left-1/3 rotate-[-3deg]',
    'top-80 left-1/2 rotate-[5deg]',
  ]
  return positions[index % positions.length]
}
