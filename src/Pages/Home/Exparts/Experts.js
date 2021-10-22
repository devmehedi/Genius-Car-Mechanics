import React from 'react';
import Expert from '../Expart/Expert';

const experts = [
    {
        img: 'https://i.ibb.co/1ntfbmQ/6.png',
        name: 'Solim',
        expertize: '-Engine Expert'
    },
    {
        img: 'https://i.ibb.co/ZH1TBYs/1.png',
        name: 'Kolim',
        expertize: '-Engine Expert'
    },
    {
        img: 'https://i.ibb.co/P9VGHGg/5.png',
        name: 'Ashik',
        expertize: '-Engine Expert'
    },
    {
        img: 'https://i.ibb.co/SVPrXjD/4.png',
        name: 'Sabbir',
        expertize: '-Engine Expert'
    },
    {
        img: 'https://i.ibb.co/smVDp1G/3.png',
        name: 'Mychel',
        expertize: '-Engine Expert'
    },
    {
        img: 'https://i.ibb.co/zHgMzNf/2.png',
        name: 'Ami',
        expertize: '-Engine Expert'
    },
]


const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;