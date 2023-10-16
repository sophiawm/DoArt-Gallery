import styled from 'styled-components';


const StyledHeader = styled.div `
    .header{
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-container{
        margin-left: 1rem;

    }

    .icons-container{
        width: 30%;
        display: flex;
        justify-content: space-around;
        margin-right: 1rem;
    }

    .dropdown__container{
        width: 100vw;
        height: 100vh;
        background-color: #F2F2F2;
        position: absolute;
        top: 0;
        flex-direction: column;
        display: none;
    }

    .categories__container{
        list-style: none;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.3rem;
        margin-left: 1rem;
        display: none;
    }

    .dropdown__Home{
        cursor: pointer;
    }

    .dropdown__Categories{
        cursor: pointer;
    }

    .dropdown__About-Us{
        cursor: pointer;
    }

    .dropdown__Your-Profile{
        cursor: pointer;
    }

    .icon-container{
        align-self: end;
        margin-right: 2rem;
        margin-top: 1rem;
    }

    .dropdown__text-container{
        height: 10rem;
        font-size: 1.4rem;
        font-weight: bold;
        margin-left: 4.9rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 4rem;
    }

    .dropdown__image-container{
        position: absolute;
        bottom: 4rem;
        left: 4rem;
    }



`

export default StyledHeader;