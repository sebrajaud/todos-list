import React from 'react';
import { Link } from 'react-router-dom';
import { setFilter, visibilityFilters } from '../store/actions';



const FilterLinks = (props) => {

    return(
        <>
            <Link className="btn btn-secondary mr-2" to="/todos/all">Tout</Link>
            <Link className="btn btn-secondary mr-2" to="/todos/done" >Fini</Link>
            <Link className="btn btn-secondary" to="/todos/active">En cours</Link>            
        </>
    )

}

export default FilterLinks;
