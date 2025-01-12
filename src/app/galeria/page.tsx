'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from "@/components/ui/button"

type MediaItem = {
    type: 'image';
    src: string;
    alt: string;
}

const ITEMS_PER_PAGE = 20

export default function Galeria() {
    const [currentPage, setCurrentPage] = useState(1)
    const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([])

    useEffect(() => {
        const loadImages = async () => {
            const items: MediaItem[] = []
            for (let i = 1; i <= 204; i++) {
                try {
                    const res = await fetch(`/image/galeria/${i}.jpg`)
                    if (res.ok) {
                        items.push({
                            type: 'image',
                            src: `/image/galeria/${i}.jpg`,
                            alt: `Foto ${i}`
                        })
                    } else {
                        break
                    }
                } catch (error) {
                    console.error('Error loading image:', error)
                    break
                }
            }
            setMediaItems(items)
        }
        loadImages()
    }, [])

    const totalPages = Math.ceil(mediaItems.length / ITEMS_PER_PAGE)
    const currentItems = mediaItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))

    const nextImage = () => setLightboxIndex(prev => (prev + 1) % mediaItems.length)
    const prevImage = () => setLightboxIndex(prev => (prev - 1 + mediaItems.length) % mediaItems.length)

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 3))
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 1))

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Header */}
            <header className="p-5 bg-black text-amber-400">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-4xl font-bold font-caveat">Tesoros del Saber - Galería</h1>
                    <Link href="/" className="flex items-center text-amber-400 hover:text-amber-300">
                        <ArrowLeft className="mr-2" />
                        Regresar
                    </Link>
                </div>
            </header>

            {/* Video Section */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Video de la Graduación</h2>
                <div className="aspect-video mb-4">
                    {/* Video incrustado desde YouTube */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/tNzXYQ-QP2w?si=X9cM_-AqX4bHnhig"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Opción para descargar */}
                <a
                    href="https://drive.google.com/uc?export=download&id=1_LT3UQQUc6NmX3pJKVFv7rmQokfV6D_j"
                    className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
                    download
                    target="_blank"
                >
                    Descargar Video
                </a>
            </section>

            {/* Contenido de la Galería */}
            <main className="container mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold mb-8">Galería de Fotos</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative aspect-square cursor-pointer"
                            onClick={() => {
                                setLightboxItem(item)
                                setLightboxIndex((currentPage - 1) * ITEMS_PER_PAGE + index)
                            }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Paginación */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <Button onClick={prevPage} disabled={currentPage === 1}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
                    </Button>
                    <span>{currentPage} de {totalPages}</span>
                    <Button onClick={nextPage} disabled={currentPage === totalPages}>
                        Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </main>

            {/* Lightbox */}
            {lightboxItem && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="max-w-4xl max-h-full p-4 relative">
                        <div className="overflow-hidden" style={{ maxWidth: '100%', maxHeight: '80vh' }}>
                            <div
                                style={{
                                    transform: `scale(${zoom})`,
                                    transition: 'transform 0.2s',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    src={mediaItems[lightboxIndex].src}
                                    alt={mediaItems[lightboxIndex].alt}
                                    width={2048}
                                    height={1536}
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <Button className="absolute top-2 right-2" onClick={() => {
                            setLightboxItem(null)
                            setZoom(1)
                        }}>
                            Cerrar
                        </Button>
                        <Button className="absolute bottom-2 left-2" onClick={prevImage}>
                            <ChevronLeft />
                        </Button>
                        <Button className="absolute bottom-2 right-2" onClick={nextImage}>
                            <ChevronRight />
                        </Button>
                        <Button className="absolute bottom-2 left-1/2 -translate-x-12" onClick={handleZoomIn}>
                            <ZoomIn />
                        </Button>
                        <Button className="absolute bottom-2 left-1/2 translate-x-2" onClick={handleZoomOut}>
                            <ZoomOut />
                        </Button>
                    </div>
                </div>
            )}

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
