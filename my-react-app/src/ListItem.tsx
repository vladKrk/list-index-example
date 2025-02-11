import { Button } from '@gravity-ui/uikit';
import React, { useState } from 'react';

export const ListItem = ({ name }: { name: string }) => {
    const [active, setActive] = useState(false);

    return <div>
        {`${name} | ${active}`}
        <Button onClick={() => setActive(true)}>Activate</Button>
    </div>
};