import React, { useEffect, useState } from 'react';
import "../App.css";

interface Artwork {
    id: number;
    title: string;
    artist_display: string;
    place_of_origin?: string;
    inscriptions?: string;
    date_start?: string;
    date_end?: string;
}

const NewPage: React.FC = () => {
    const [data, setData] = useState<Artwork[]>([]);

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks?page=1')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((json: any) => {
                console.log('Fetched data:', json.data);
                setData(json.data as Artwork[]);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Artworks</h1>
            <div className='artwork-list'>
                {data.map((item) => (
                    <div key={item.id} className='artwork-item'>
                        <p>{item.title}</p>
                        <p>A{item.artist_display}</p>
                        {item.place_of_origin && <p>Place of Origin: {item.place_of_origin}</p>}
                        {item.inscriptions && <p>Inscriptions: {item.inscriptions}</p>}
                        {item.date_start && item.date_end && <p>Date: {item.date_start} - {item.date_end}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewPage;
