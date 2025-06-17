import Image from "next/image"

export const HeroSection = () => {
  return (
    <div className="bg-in-cyan pb-12 md:pb-16 lg:pb-20">
        <section className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-2">
                    <h1 className="text-in-blue text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                        <span className="text-in-cyan-base font-bold">Recupera</span> tu vida sexual con el poder de las {' '}
                        <span className="text-in-cyan-base font-bold">Ondas de Choque</span>
                    </h1>
                    <p className="text-in-blue text-xl md:text-2xl lg:text-3xl text-center md:text-left">Solución efectiva y sin cirugías.</p>
                </div>
                <Image
                    src="/images/home/hero-image.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover max-w-[480px] md:max-w-full mx-auto md:mx-0"
                    priority
                    unoptimized
                />
            </div>
        </section>
    </div>
  )
}
