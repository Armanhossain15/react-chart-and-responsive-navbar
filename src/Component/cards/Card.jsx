import CardInfo from "./CardInfo";


const Card = () => {
    const packages = [
        {
            packageName: "Basic Membership",
            description: "Ideal for beginners and those looking for a simple workout routine. Get access to our basic gym facilities including cardio machines, free weights, and locker rooms.",
            features: [
                "Access to cardio machines",
                "Free weights area",
                "Locker room facilities"
            ],
            price: "$29.99/month"
        },
        {
            packageName: "Premium Membership",
            description: "Perfect for fitness enthusiasts seeking more variety and advanced equipment. Enjoy exclusive access to our full range of gym facilities, group classes, and personal training sessions.",
            features: [
                "Access to all gym facilities",
                "Unlimited group fitness classes",
                "Personal training sessions (2 sessions/month)",
                "Sauna and steam room access"
            ],
            price: "$59.99/month"
        },
        {
            packageName: "Elite Membership",
            description: "Designed for serious athletes and individuals committed to achieving their fitness goals. Benefit from top-tier amenities, personalized training plans, and additional perks.",
            features: [
                "Unlimited access to all gym facilities",
                "Unlimited group fitness classes",
                "Personalized training plan",
                "Nutrition consultation",
                "Exclusive discounts on supplements and apparel",
                "Priority booking for classes and equipment"
            ],
            price: "$99.99/month"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-3/4 mx-auto mt-10">
            {
                packages.map((pack, id) => <CardInfo 
                                        key={id} 
                                        cardContent={pack}
                                        ></CardInfo>)
            }
        </div>
    );
};

export default Card;