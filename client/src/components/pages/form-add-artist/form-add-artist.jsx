import ButtonSmall from "../../atoms/buttons/button-small";
import StyledFormAddArtist from "./styled-form-add-artist";
import { useRef } from 'react';
import { useState } from 'react';
import HeaderAdmin from "../../templates/header-admin/header";
import FooterAdmin from "../../templates/footer-admin/footer";

// eslint-disable-next-line react-refresh/only-export-components
export const categories = ['Paintings', 'Sculpture', 'Textiles','Photography', 'Collage' ,'Mixed-media'];

const artWork = [''];

const AddArtistForm = () => {


  const inputText = useRef(null);
  const inputFile = useRef(null);
  const [fileName, setFileName] = useState('');


  const text = () => {
    const file = inputFile.current.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <StyledFormAddArtist>
      <HeaderAdmin />
      <section className="form-add-artist">
        <h1 className="form__title">ADD ARTIST</h1>
        <form action="" className="form__add-artist">

        <div className="form__inputs-columnOne"> 



        <label htmlFor="form__input-file">
            UPLOAD IMAGE
              <div className="form__container--input">
                <input
                  type="file"
                  id="form__input-file"
                  ref={inputFile}
                  onChange={text}
                />
                <div className="form__input-text" ref={inputText}>
                  {fileName}
                </div>
                <div className="form__input-icon"></div>
              </div>
            </label>





        <label htmlFor="form__input-text">
              ARTIST
              <div className="form__container--input">
                <input
                  type='text'
                  id="form__input-text"
                />
              </div>
            </label>




        <label htmlFor="form__input-select" >
        CATEGORY
        <div className="form__container--input">
          <select type="text" id="form__input-select">
            <option value=""></option>
            {categories.map((a, b) => (
              <option key={b} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </label>


        </div>
        <div className="form__inputs-columnTwo"> 



        <label htmlFor="form__input-textarea">
            DESCRIPTION
           
                <textarea
                  type="text"
                  id="form__input-textarea"
                ></textarea>
      
            </label>



        <label htmlFor="form__input-artwork">
              SELECT ARTWORK
        <div className="form__container--input">
          <select type="text" id="form__input-artwork">
            <option value=""></option>
            {artWork.map((a, b) => (
              <option key={b} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </label>

        </div>

        <div className="form__button">
        <ButtonSmall text={'SAVE'} color={'black'} width={'20rem'} />
        </div>
        </form>
      </section>
      
      <FooterAdmin />
    </StyledFormAddArtist>
  );
};

export default AddArtistForm;

