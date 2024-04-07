import PropTypes from 'prop-types';
import Features from './Features';

const CardInfo = ({ cardContent }) => {
    const { price, packageName, features } = cardContent
    return (
        <div className="bg-blue-600 text-white p-6  py-10 text-center flex flex-col">
            
                <h1 className="text-5xl font-extrabold">{price}</h1>
                <h2 className='text-2xl py-3 '>{packageName}</h2>
                <div className='space-y-1 mt-3 flex-1'>
                    {
                        features.map((feature, i) => <Features
                            key={i}
                            feature={feature}
                        ></Features>)
                    }
                </div>
                <button className='btn mt-3 bg-white text-black border-none w-full '>Buy Now</button>
            
        </div>
    );
};
CardInfo.propTypes = {
    cardContent: PropTypes.object
}
export default CardInfo;