import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { caveat } from '../layout'

const graduados = [
    { id: 1, nombre: "ACUÑA TINCO, Maria Fernanda", cumpleanos: "26/03/2019", profesion: "Bombero", hobbys: "Viajar en familia" },
    { id: 2, nombre: "ARAUJO PARIONA, Hadassa Victoria", cumpleanos: "25/11/2018", profesion: "Diseñadora de Modas", hobbys: "Cantar, dibujar y pintar" },
    { id: 3, nombre: "BRAVO COARITA, Karine Margareth", cumpleanos: "20/12/2018", profesion: "Farmacéutica", hobbys: "Pintar, dibujar y bailar" },
    { id: 4, nombre: "BRAVO SOLÍS, Luciana Caili", cumpleanos: "05/09/2018", profesion: "Doctora", hobbys: "Bailar y pintar" },
    { id: 5, nombre: "CABELLO HINOSTROZA, Alessia Ximena", cumpleanos: "04/05/2018", profesion: "Farmacéutica", hobbys: "Dibujar, pintar y las manualidades" },
    { id: 6, nombre: "CÁCERES CASTRO, Cataleya", cumpleanos: "24/02/2019", profesion: "Doctora", hobbys: "Jugar con sus muñecas" },
    { id: 7, nombre: "CARRANZA RIOS, Grecia Luz", cumpleanos: "11/10/2018", profesion: "Policía/ Diseñadora de modas", hobbys: "Dibujar y pintar" },
    { id: 8, nombre: "DIAZ BAYONA, Rodrigo Stefano", cumpleanos: "15/05/2018", profesion: "Doctor", hobbys: "Jugar fútbol" },
    { id: 9, nombre: "FERRER GARCILAZO, Luciana Rafaela", cumpleanos: "27/04/2018", profesion: "Astronauta", hobbys: "Bailar, nadar y pintar" },
    { id: 10, nombre: "GAMARRA CASTRO, Alejandro Gabriel", cumpleanos: "17/02/2019", profesion: "Piloto", hobbys: "Bailar, nadar y jugar" },
    { id: 11, nombre: "HUERTA VELÁSQUEZ, Emma Nathaly", cumpleanos: "29/12/2018", profesion: "Doctora", hobbys: "Dibujar, pintar y cantar" },
    { id: 12, nombre: "LLAUCE RIVADENEYRA, Ariana Ghaela", cumpleanos: "07/11/2018", profesion: "Doctora/ Profesora en marinera", hobbys: "Pintar, jugar y bailar marinera" },
    { id: 13, nombre: "PACHECO SALAZAR, Pedro Alexandro", cumpleanos: "24/11/2018", profesion: "Médico/ Bombero", hobbys: "Nadar, jugar e ir al cine" },
    { id: 14, nombre: "PORTELLA VEGA, Alessia Valeska", cumpleanos: "01/02/2019", profesion: "Profesora", hobbys: "Hacer coreografías de baile" },
    { id: 15, nombre: "SUMALAVE GARRAFA, Gabriel Alexander", cumpleanos: "15/04/2018", profesion: "Ingeniero", hobbys: "Nadar, correr y jugar videojuegos" },
    { id: 16, nombre: "VEGA MEGO, Laura Valentina", cumpleanos: "18/06/2018", profesion: "Doctora/ Profesora", hobbys: "Pintar, bailar y jugar" },
    { id: 17, nombre: "VELÁSQUEZ VERA, Lia Sofía", cumpleanos: "30/03/2019", profesion: "Profesora", hobbys: "Bailar, dibujar y manejar bicicleta" },
]

export default function Anuario() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Header */}
            <header className="p-5 bg-black text-amber-400">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className={`text-4xl font-bold text-center ${caveat.className}`}>Tesoros del Saber</h1>
                    <Link href="/" className="flex items-center text-amber-400 hover:text-amber-300">
                        <ArrowLeft className="mr-2" />
                        Regresar
                    </Link>
                </div>
            </header>

            {/* Imagen de portada */}
            <div className="relative h-96 w-full">
                <Image
                    src="/image/portadaanuario.jpeg?height=400&width=200&text=Portada+del+Anuario"
                    alt="Portada del Anuario"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>

            {/* Contenido del Anuario */}
            <main className="container mx-auto px-4 py-16 max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 text-center text-black">Nuestros Graduados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {graduados.map((graduado) => (
                        <div key={graduado.id} className="relative overflow-hidden rounded-lg shadow-lg bg-white w-60 h-80 mx-auto">
                            <Image
                                src={`/image/graduado${graduado.id}.jpeg`} //  Cambié la URL para que use el id del graduado
                                alt={`Foto de ${graduado.nombre}`}
                                width={200}
                                height={300}
                                className="w-60 h-80 border-8 border-amber-400 shadow-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="text-white text-center p-4">
                                    <h3 className="text-xl font-bold mb-2">{graduado.nombre}</h3>
                                    <p>🎂 {graduado.cumpleanos}</p>
                                    <p>🎓 {graduado.profesion}</p>
                                    <p>❤️ {graduado.hobbys}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

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

