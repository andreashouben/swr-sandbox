import {Spinner} from 'react-bootstrap';
import React from 'react';

const Loader = () =>
    <i> <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
    /> Loading for a sec...</i>

export default Loader