'use client';

import PinCode from '@/components/PinCode';

const Home = () => {
    return (
        <PinCode onComplete={(code) => console.log('Codice inserito:', code)} />
    );
};

export default Home;