const AboutUs = () => {
    return (
        <div className="container mx-auto my-6 p-6 bg-gray-300 text-black rounded-xl">
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Mission Statement</h2>
                <p className="text-lg">
                    Our mission is to make high-quality furniture accessible to everyone through flexible renting options. We believe in sustainability, convenience, and affordability.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>A wide range of stylish and comfortable furniture for every room.</li>
                    <li>Flexible rental plans tailored to your needs.</li>
                    <li>Easy delivery and setup.</li>
                    <li>Option to purchase rented furniture at any time.</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                <ul className="list-disc list-inside text-lg">
                    <li><strong>Customer Satisfaction:</strong> Your comfort and happiness are our top priorities.</li>
                    <li><strong>Sustainability:</strong> We believe in reducing waste through furniture reuse and recycling.</li>
                    <li><strong>Innovation:</strong> Continuously improving our services to offer the best renting experience.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
