import { useState } from "react"
import PropTypes from "prop-types"
import Star from "./Star"
const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: '16px'
}

const starContainerStyle = {
    display: "flex",
    gap: "4px"
}

StarRating.propTypes = {
    maxRating : PropTypes.number.isRequired,
    defaultRating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    messages: PropTypes.array,
    className: PropTypes.string
}

export default function StarRating({
        maxRating = 4, 
        color = '#fcc419', 
        size= 48,
        className = '',
        messages= [],
        defaultRating = 0,
        onMovieRating
    }) {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(0);

    const textStyle = {
        lineHeight: "1",
        margin: "0",
        color,
        fontSize: `${size / 1.5}px`
    }
    
    function handleRating (rating)  {
        setRating(rating);
        onMovieRating(rating);
    }

    const handleMouseenter = (i) => {
        setTempRating(() => i + 1)
    }

    const handleMouseOut = () => {
        setTempRating(0)
    }
    
    return(
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                {Array.from({length:maxRating}, (_, i) => (
                        <Star 
                            key={i} 
                            full={ tempRating ? tempRating >= i + 1 : rating >=  i + 1 } 
                            onRate={() => handleRating(i+1)}
                            onMouseEnter = {() => handleMouseenter(i)}
                            onMouseOut = {handleMouseOut}
                            color={color} size={size}
                        />
                        )                        
                    )
                }
            </div>
            <p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating -1 : rating -1] : tempRating || rating || ''}</p>
        </div>
    )
}