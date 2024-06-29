import { Star } from 'lucide-react'
export default function NewsLetter() {
    return (
        <>
            <div className="mx-auto my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <h2 className="text-3xl font-bold text-black">Sign up for our weekly newsletter</h2>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                            commodo posuere et sit amet ligula.
                        </p>
                        <div className="mt-4">
                            <p className="font-semibold text-gray-800">
                                Trusted by over 100,000+ businesses and individuals
                            </p>
                            <div className="mt-2 flex items-center">
                                <div className="flex space-x-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="ml-2 inline-block">
                                    <span className="text-sm font-semibold text-gray-800">4.8/5 . 3420 Reviews</span>
                                </span>
                            </div>
                        </div>
                        <form className="mt-6">
                            <div className="flex w-full max-w-md flex-col space-y-4">
                                <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Email"
                                ></input>
                                <button
                                    type="button"
                                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <p className="mt-2">
                            <span className="text-sm text-gray-600">
                                By signing up, you agree to our terms of service and privacy policy.
                            </span>
                        </p>
                    </div>
                    <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
                        <img
                            className="h-full w-full rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                            alt="Newsletter"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
