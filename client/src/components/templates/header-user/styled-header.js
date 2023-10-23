import styled from 'styled-components';


const StyledHeader = styled.div `
    .header-desktop{
        display: none;
    }
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
    

    @media screen and (min-width: 391px){
        .header{

            display: none;
        }

        .header-desktop{
            display: flex;
            width: 100vw;
            height: 10vh;
            justify-content: space-between;
        }

        .header__logo{
            height: 80%;
            align-self: center;
        }
        
        .header__container{
            display: flex;
            gap: 6rem;
            font-size: 1rem;
            align-items: center;
        }

        .container-categories{
            display: flex;
            gap: 2rem;
            align-items: center;
            height: 10vh;
        }

        .categories__icon{
            height: 1rem;
            
        }

        .animation-icon{
            transform: scaleY(-1);
            height: 1rem;
            display: none;
        }

        .header__categories{
            font-size: 1rem;
        }

        .header__icons-container{
            display: flex;
            height: 10vh;
            gap: 1rem;
            align-items: center;
        }

        .header__shopping-icon, .header__notification-icon{
            height: 2.5rem;
            margin-right: 2rem;
        }

        .categories__container-desktop{
            position: absolute;
            top: 3rem;
            background-color: #F2F2F2;
            list-style: none;
            width: 10rem;
            border: solid black;
            display: none;
            right: 36.5rem;
            z-index: 9;
            li{
                border-bottom: solid black;
                height: 2.5rem; 
                display: grid;
                place-items: center;
                font-weight: 200; 
            }
            li:last-child {
                border-bottom: none;
              }
        }

    }

`

export default StyledHeader;