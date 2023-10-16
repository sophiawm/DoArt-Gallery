import styled from 'styled-components';

const StyledAboutUs = styled.div `
    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: green;
    }

    .about{
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items:center;
        gap: 5rem;
    }

    .about__image{
        background-image: url(src/assets/pages/about-banner.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 20rem;
        width: 100vw;
        display: grid;
        place-items: center;
    }

    .about__image-text{
        text-align: center;
        width: 60%;
        color: white;
        font-size: 2rem;
    }

    .about__our-mission-container, .about__our-vision-container{
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 3rem; 
        hyphens: auto;
        text-align: start;
    }

    .about__our-mission-title, .about__our-vision-title{
        text-align: center;

    }

    .about__our-mission-text, .about__our-vision-text{
        font-size: 1rem;
        word-spacing: 0.6rem;
        flex-grow: 1;
        overflow-wrap: break-word;
        height: auto; 
    }

    .about__logo-container{
        margin: 0 auto;
    }

    .about__logo{
        
    }

`

export default StyledAboutUs;



{/*   <header></header>
            <section className='about'>
                <div className='about__image'>
                    <h1 className='about__image-text'>Welcome to a new place to feel inspired</h1>
                </div>

                <div className='about__our-mission-container'>
                <h1 className='about__our-mission-title'>OUR MISSION</h1>
                <p className='about__our-mission-text'>DoArt is a dynamic and vibrant e-commerce platform dedicated to celebrating the world of art and artists. This online business is a haven for art enthusiasts, collectors, and artists themselves, providing a curated selection of exquisite artwork from a diverse array of talented artists.</p>
                </div>

                <div className='about__our-vision-container'>
                <h1 className='about__our-vision-title'>OUR VISION</h1>
                <p className='about__our-vision-text'>DoArt not only aims to connect art lovers with stunning pieces but also serves as a platform for emerging and established artists to showcase their work to a global audience.</p>
                </div>

                <div className='about__logo-container'>
                <img src="src/assets/pages/about-logo.svg" alt="about-logo" className='about__logo'/>
                </div>


            </section>
            <footer></footer>
 */}
