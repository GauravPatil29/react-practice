import React from 'react';

import { Button } from 'src/components';

const Search = () => {
    return (
        <div className='row'>
            <Button label={'Search'} variant='primary' type='button' size='medium' />
            <Button label={'Search'} variant='secondary' type='button' size='medium' />
            <Button disabled label={'Search'} variant='primary' type='button' size='medium' />
        </div>
    );
};

export default Search;
