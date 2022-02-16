import React from 'react'
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './button.module.css';

const Button = props => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <button className={classes.button} {...props}>
            Core Button
        </button>
    )
}

export default Button
