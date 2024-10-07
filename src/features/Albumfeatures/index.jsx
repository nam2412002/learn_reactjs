import React from 'react';

import AlbumList from './components/AlbumList';


Album1.propTypes = {
    
};

function Album1(props) {
    const ab =[
        {   
            id: 1,
            name: ' con cho 1',
            thumbnaiUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi3IPrv-Q0M0AVwxov7k6tNfprjSrWEzUow&s'
        },
        {
            id: 2,
            name: ' con cho 2',
            thumbnaiUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuyfpfCCwmnTIMXC3Cue58oz5dStCuQ4mQA&s'
        },
        {
            id: 3,
            name: ' con cho 3',
            thumbnaiUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM06nXkpxJQbGffqcEmfbXGK9H6VlM-600EA&s'
        },
    ];
    return (
        <div>
            <h2>nghe khong ?</h2>
        <AlbumList albumList={ab}/>

        
        </div>
    );
}

export default Album1;