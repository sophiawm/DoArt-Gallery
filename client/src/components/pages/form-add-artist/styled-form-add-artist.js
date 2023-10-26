import styled from 'styled-components';

const StyledFormAddArtist = styled.div`

    .form-add-artist{
        min-height: 80vh;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100vw;
    }


    .form__add-artist{
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        gap: 1rem;
        text-align: center;

    }

    .form__inputs-columnTwo, .form__inputs-columnOne
    {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }


    label {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: bold;
      gap: 0.4rem;
    }
  
    #form__input-textarea {
      height: 7rem;
      width: 100%;
      border: solid black 0.1rem;
      border-radius: 0.2rem;
      resize: vertical;
      overflow-y: auto;
    }


    #form__input-select, #form__input-artwork{
      height: 2rem;
      width: 100%;
      border: none; 
      border-radius: 0.2rem;
    }
  
    label {
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: bold;
    }
  
    .form__container--input select {
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("src/assets/icons/plus-icon.svg") no-repeat;
      background-size: 1rem 1rem;
      background-position: right 0.3rem center;
    }


    .form__container--input{
      display: flex;
      align-items: end;
      border: solid black 0.1rem;
      border-radius: 0.3rem;
      width: 100%;
  }

  .form__input-icon{
      height: 2rem;
      width: 2rem;
      background-image: url(src/assets/icons/cloud-computing-icon.svg);
      background-position: center;
      background-size: center;
      background-repeat: no-repeat;
      background-color: white;
      border: none;
      border-radius: 0.3rem;
  }

  #form__input-file{
      height: 2rem;
      width: auto;
      display: none;
  }




  .form__input-text{
      height: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      text-align: start;
      font-size: 0.7rem;
      font-weight: 500;
  }


    #form__input-text {
      height: 2rem;
      width: 100%;
      border: none;
      border-radius: 0.2rem;
    }


    

    @media screen and (min-width: 391px){

        .form__inputs-columnTwo, .form__inputs-columnOne
        {
            display: flex;
            gap: 1rem;
            flex-direction: column;
        }

        .form-add-artist{
            min-height: 80vh;
            max-height: 100%;
            width: 100vw; 
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            margin: 4rem 0;

        }

        .form__add-artist{
            width: 80%;
            grid-row: 2;
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto 1fr auto;
            align-self: center;
            justify-self: center;
        
        }

        .form__title{
            grid-row: 1;
            width: 100%;
            text-align: center;
        }

        .form__inputs-columnOne{
            grid-column: 1;
            grid-row: 2;
        }

        .form__inputs-columnTwo{
            display: grid;
            grid-column: 2;
            grid-row: 2;
        }

        .form__button{
            grid-row: 3;
            grid-column: 1/span 2;
        }

        //   ///textarea
          label {
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            font-size: 1rem;
            font-weight: bold;
            gap: 0.4rem;
          }
        
          #form__input-textarea {
            height: 7rem;
            width: 100%;
            border: solid black 0.1rem;
            border-radius: 0.2rem;
            resize: vertical;
            overflow-y: auto;
          }

          //   ///



          //   ///select

 
          #form__input-select, #form__input-artwork{
            height: 2rem;
            width: 100%;
            border: none; 
            border-radius: 0.2rem;
          }
        
          label {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-size: 1rem;
            font-weight: bold;
          }
        
          .form__container--input select {
            -webkit-appearance: none;
            -moz-appearance: none;
            background: url("src/assets/icons/plus-icon.svg") no-repeat;
            background-size: 1rem 1rem;
            background-position: right 0.3rem center;
          }

          //   ///



          //   /// INPUT FILE

          .form__container--input{
            display: flex;
            align-items: end;
            border: solid black 0.1rem;
            border-radius: 0.3rem;
            width: 100%;
        }
    
        .form__input-icon{
            height: 2rem;
            width: 2rem;
            background-image: url(src/assets/icons/cloud-computing-icon.svg);
            background-position: center;
            background-size: center;
            background-repeat: no-repeat;
            background-color: white;
            border: none;
            border-radius: 0.3rem;
        }
    
        #form__input-file{
            height: 2rem;
            width: auto;
            display: none;
        }
    

    
    
        .form__input-text{
            height: 2rem;
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            text-align: start;
            font-size: 0.7rem;
            font-weight: 500;
        }

        //   ///


        //   /// INPUT TEXT
        
          #form__input-text {
            height: 2rem;
            width: 100%;
            border: none;
            border-radius: 0.2rem;
          }


          //   ///

    }

   

`


export default StyledFormAddArtist;