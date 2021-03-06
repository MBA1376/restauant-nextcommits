import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SearchFieldGroup = ({
    name ,
    placeholder ,
    value ,
    label ,
    error ,
    info ,
    type ,
    onChange ,
    disabled
}) => {
    return (
     <div className="form-group">
        <input
            type = {type}
            className = {classnames('form-control form-control-lg ' , {
                'is-invalid' : error
            })}
            placeholder = {placeholder}
            name = {name}
            value = {value}
            onChange = {onChange}
            disabled = {disabled}
        />
        {/* <span><i class="fa fa-search" aria-hidden="true"></i></span></input> */}
        {info && <small className="from-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
     </div>
    );
}


SearchFieldGroup.propTypes = {
    name : PropTypes.string.isRequired ,
    placeholder : PropTypes.string ,
    value : PropTypes.string.isRequired ,
    info : PropTypes.string,
    type : PropTypes.string.isRequired ,
    error : PropTypes.string,
    onChange : PropTypes.func.isRequired ,
    disabled : PropTypes.string

}

SearchFieldGroup.defaultProps = {
    type : 'text'
}

export default SearchFieldGroup; 