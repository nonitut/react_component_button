import React from "react";
import classNames from "classnames";



const ButtonComp = function(props) {
    console.log(props);
    return(
        <button 
        onClick={props.onClick}
            className={classNames(
                "button",
                {
                    "button--outline": props.outline,
                    "button--primary": !props.outline,
                }
            )}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default ButtonComp;