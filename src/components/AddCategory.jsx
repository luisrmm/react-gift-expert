import { useState } from 'react';
import PropTypes from "prop-types";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");
    
    const onInputchange = ({ target }) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === "") {
            return;
        }
        onNewCategory(inputValue)
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar Gifs" onChange={ onInputchange } value={ inputValue }/>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
