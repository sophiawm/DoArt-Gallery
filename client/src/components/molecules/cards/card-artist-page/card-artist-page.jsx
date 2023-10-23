import { useEffect, useState } from 'react';
import StyledCardArtistPage from './styled-artist-page';


const CardArtistPage = ()=>{

    const [artist, setArtist] = useState([]);

    useEffect(()=>{
        const getArtist=()=>{
            fetch('http://localhost:3002/artist')
                .then((res)=>{
                    return res.json()
                })
                .then((res)=>{
                    setArtist(res.find((a)=>{
                        return a.artistName === 'Yinka Shonibare'
                    }))
                    console.log(res)
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
        getArtist();
    },[])




    return(
        <StyledCardArtistPage>
            <section className='card-artist-page'>
                    <h1 className='artist__name'>{artist.artistName}</h1>
                    <div className='artist__image-container'>
                        <img src={artist.artistImage} alt="image-artist" className='artist__image'/>
                    </div>
                    <p className='artist__type'>{artist.artistTypeArt}</p>
                    <p className='artist__biography'>{artist.artistDescription}</p>
                    <p className='artist__categories'><span className='bold'>Categories: </span>{artist.artistCategory}</p>
            </section>
        </StyledCardArtistPage>
    )
}


export default CardArtistPage;