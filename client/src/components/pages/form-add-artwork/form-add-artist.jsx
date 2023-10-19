import StyledFormAddArtist from "./styled-form-add-artist";
import { dataDoArt } from "../../../data";
import ButtonSmall from "../../atoms/buttons/button-small";
import InputTextarea from "../../atoms/inputs/input-textarea/input-textarea";
import HeaderAdmin from "../../templates/header-admin/header";
import FooterAdmin from "../../templates/footer-admin/footer";


const AddArtwork = () => {

  return (
    <StyledFormAddArtist>
      <HeaderAdmin />
      <section className="form-add-artist">
        <h1>ADD AN ARTIST</h1>
        <form action="" className="form__add-artist">

        <div className="form__column-one">

        <label htmlFor="form__input-file">
            UPLOAD IMAGE
              <div className="form__container--input">
                <input
                  type="file"
                  id="form__input-file"
                />
                <div className="form__input-text"> </div>
                <div className="form__input-icon"></div>
              </div>
            </label>

    
        <label htmlFor="form__input-artwork">
        ARTWORK NAME
              <div className="form__container--input">
                <input
                  type='text'
                  id="form__input-artwork"
                />
              </div>
            </label>
  
        <label htmlFor="form__input-dimensions">
              DIMENSIONS
              <div className="form__container--input">
                <input
                  type='text'
                  id="form__input-dimensions"
                />
              </div>
            </label>

            <label htmlFor="form__input-materials">
              MATERIALS
              <div className="form__container--input">
                <input
                  type='text'
                  id="form__input-materials"
                />
              </div>
            </label>

        </div>



        <div className="form__column-two">

        

        <label htmlFor="form__input-category" >
        CATEGORY
        <div className="form__container--input">
          <select type="text" id="form__input-category">
            <option value=""></option>
   
          </select>
        </div>
      </label>

      <InputTextarea title={'DESCRIPTION'} gap={'1'}/>



<label htmlFor="form__input-artist" >
SELECT ARTWORK
<div className="form__container--input">
  <select type="text" id="form__input-artist">
    <option value=""></option>

  </select>
</div>
</label>


      </div>


        


        <div className="form__button">
        <ButtonSmall text={'SAVE'} color={'black'} width={'20rem'}/>
        </div>
        </form>
      </section>
      <FooterAdmin />
    </StyledFormAddArtist>
  );
};

export default AddArtwork;

