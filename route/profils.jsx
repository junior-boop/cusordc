import React from 'react';
import Profils_Page from '../src/Layouts/profils_page';
import Screen, { Normale_Screen } from '../src/Layouts/screen';
import Container from '../src/Layouts/container';

export default function Profils_Route(){
    return (
        <>
           <Screen>
            <Normale_Screen>
                    <Container>
                        <Profils_Page />
                    </Container>
                </Normale_Screen>
           </Screen>
        </>
    )
}