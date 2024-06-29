import FAQ from "./FAQ";

export default function Home() {
    return (
        <main className="flex-1">
            <div className="relative w-full bg-white">
                <div className="mx-auto max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <section className="bg-[url('/hero-image.jpg')] bg-cover bg-center py-20 md:py-32 lg:py-40">
                        <div className="container px-4 md:px-6">
                            <div className="max-w-xl space-y-4">
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    Affordable Furniture Rentals for Every Home
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    Discover the perfect furniture for your space with our flexible rental options.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        style={{ backgroundColor: "black", color: "white" }}
                                    >
                                        Shop Now
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                                    >
                                        Browse Collections
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <FAQ />
                </div>
            </div>
        </main>
    )
}
