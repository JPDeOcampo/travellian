import { FaStar } from "react-icons/fa";

const StarsComponent = ({item}) => {
    return (
        <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 5 }, (_, i) => {
                return (
                    <span key={i} className={`${i < item.ratings ? '[&_svg]:text-yellow-500' : '[&_svg]:text-secondary-300'}`}><FaStar /></span>
                )
            })}
        </div>
    )
}

export default StarsComponent