import StyledFormAddArtist from "./styled-form-add-artist";
import ButtonSmall from "../../atoms/buttons/button-small";
import HeaderAdmin from "../../templates/header-admin/header";
import FooterAdmin from "../../templates/footer-admin/footer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddArtwork = () => {

  //conseguir categorias y artistas
  const [categories, setCategories] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("http://localhost:3002/categories")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setCategories(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getArtists=()=>{
      fetch("http://localhost:3002/artist")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setArtists(res);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    getCategories();
    getArtists();
  }, []);

  //manejo de formulario

  const { register, handleSubmit, setValue } = useForm();

  const getFormData=(data)=>{

    fetch('http://localhost:3002/artwork',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
    })
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  return (
    <StyledFormAddArtist>
      <HeaderAdmin />
      <section className="form-add-artist">
        <h1>ADD ARTWORK</h1>

        <form action="" className="form__add-artist" onSubmit={handleSubmit(getFormData)}>

          <div className="form__column-one">
            <label htmlFor="form__input-file">
              UPLOAD IMAGE
              <div className="form__container--input">
                <input type="file" id="form__input-file" {...register('image')} onChange={(e)=>{
                  setValue('image',e.target.files[0].name)
                }}/>
                <div className="form__input-text"> </div>
                <div className="form__input-icon"></div>
              </div>
            </label>

            <label htmlFor="form__input-artwork">
              ARTWORK NAME
              <div className="form__container--input">
                <input type="text" id="form__input-artwork" {...register('artworkName')}/>
              </div>
            </label>

            <label htmlFor="form__input-artwork">
              PRICE
              <div className="form__container--input">
                <input type="number" id="form__input-artwork" {...register('artworkPrice')}/>
              </div>
            </label>

            <label htmlFor="form__input-dimensions">
              DIMENSIONS
              <div className="form__container--input">
                <input type="text" id="form__input-dimensions" {...register('artworkDimensions')}/>
              </div>
            </label>

            <label htmlFor="form__input-materials">
              MATERIALS
              <div className="form__container--input">
                <input type="text" id="form__input-materials" {...register('artworkMaterials')}/>
              </div>
            </label>
          </div>

          <div className="form__column-two">
            <label htmlFor="form__input-category">
              CATEGORY
              <div className="form__container--input">
                <select type="text" id="form__input-category" {...register("artworkCategory")}>
                  <option value=""></option>
                  {categories.map((a, b) => (
                    <option key={b} value={a} >
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label htmlFor="form__input-textarea">
              DESCRIPTION
              <textarea type="text" id="form__input-textarea" {...register('artworkDescription')}></textarea>
            </label>

            <label htmlFor="form__input-artist">
              SELECT ARTIST
              <div className="form__container--input">
                <select type="text" id="form__input-artist" {...register("artworkArtist")}>
                  <option value=""></option>
                  {artists.map((a) => (
                    <option key={a.id} value={a.artistName} >
                      {a.artistName}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          </div>


          <div className="form__button">
            <Link to='/react-marketplace/dashboard'>
            <ButtonSmall text={"SAVE"} color={"black"} width={"20rem"} />
            </Link>
          </div>

        </form>
      </section>
      <FooterAdmin />
    </StyledFormAddArtist>
  );
};

export default AddArtwork;