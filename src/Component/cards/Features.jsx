import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import PropTypes from 'prop-types';

const Features = ({ feature }) => {
    return (
        <div className="">
            <p className="flex items-center gap-2">
                <TbSquareRoundedCheckFilled /> 
                {feature}
            </p>
        </div>
            
    );
};
Features.propTypes = {
    feature: PropTypes.object
}
export default Features;