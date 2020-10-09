import React from 'react';
import { connect } from 'react-redux'
import { setFilter, visibilityFilters } from '../store/actions';


const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch(setFilter(filter))
})

const Filter = ({ setFilter }) => {

    return(
        <>
            <span className="flex-fill"></span>
            <button className="btn btn-primary mr-2" onClick={() => setFilter(visibilityFilters.SHOW_ALL)}>Tout</button>
            <button className="btn btn-primary mr-2"  onClick={ () => setFilter(visibilityFilters.SHOW_DONE) }>Fini</button>
            <button className="btn btn-primary mr-2"  onClick={ () => setFilter(visibilityFilters.SHOW_ACTIVE)}>En cours</button>
        </>
    )

}

export default connect(null, mapDispatchToProps)(Filter);
