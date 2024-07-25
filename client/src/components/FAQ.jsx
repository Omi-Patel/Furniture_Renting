const FAQ_question_answer = [
    {
        id: 1,
        question: "How does your furniture rental service work?",
        answer: "Our furniture rental service allows you to browse through a variety of furniture items on our website, select the pieces you like, and rent them for a flexible duration. You can choose rental periods ranging from weeks to months, depending on your needs."
    },
    {
        id: 2,
        question: "What are the benefits of renting furniture compared to buying?",
        answer: "Renting furniture offers several advantages, including cost-effectiveness, flexibility to change styles frequently, and the ability to access high-quality furniture without a long-term commitment. It's ideal for temporary living arrangements, staging homes for sale, or hosting events."
    },
    {
        id: 3,
        question: "How do I return rented furniture?",
        answer: "Returning rented furniture is hassle-free. At the end of your rental period, simply schedule a pick-up through our website or contact customer support. We'll arrange for our team to collect the furniture at a convenient time for you."
    },
    {
        id: 4,
        question: "Can I extend my furniture rental period?",
        answer: "Yes, you can extend your rental period if needed. Simply log into your account on our website, navigate to your rental details, and choose to extend your rental duration. You can also contact our customer support team for assistance with extending your rental."
    }
];

export default function FAQ() {
    return (
        <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0 mb-10">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                Discover how easy it is to rent furniture with us.
                </p>
            </div>
            <div className="text-black mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
                {FAQ_question_answer.map((item) => (
                    <div key={item.id} className="bg-white text-black shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-black">{item.id + ". " + item.question}</h3>
                        <p className="mt-2 text-gray-600 text-justify">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
