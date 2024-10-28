import React, { useState } from 'react';
import Counter from './Counter';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import NightsDialog from './Counter';

const NightandSightCount = () => {

    const [dialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => {
        setDialogVisible(true);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };

    return (
        <div>
            <div className='flex flex-col'>
            <div className='flex flex-col'><h2 className='text-red-700 font-bold'>Finalize Your Route Of Travel</h2></div>

            <Button label="Add Nights and SightSeeings" onClick={showDialog} />
            <NightsDialog visible={dialogVisible} onHide={hideDialog} />
            </div>
        </div>
    );
};


export default NightandSightCount;
