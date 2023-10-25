import ButtonSmall from "../../atoms/buttons/button-small";
import StyledFormAddArtist from "./styled-form-add-artist";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//
const AddArtistForm = () => {
  //manejo de formularios
  const { register, handleSubmit } = useForm();

  const getFormData = (data) => {
    fetch("http://localhost:3002/artist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //conseguir categorias y artworks
  const [categories, setCategories] = useState([]);
  const [artwork, setArtwork] = useState([]);
  const [typeArt, setTypeArt] = useState([]);

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

    const getTypeArt = () => {
      fetch("http://localhost:3002/typeArt")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTypeArt(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getArtworks = () => {
      fetch("http://localhost:3002/artwork")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setArtwork(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getCategories();
    getArtworks();
    getTypeArt();
  }, []);

  //subir imagen
  const inputText = useRef(null);
  const inputFile = useRef(null);
  const [fileName, setFileName] = useState("");

  const text = () => {
    const file = inputFile.current.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <StyledFormAddArtist>
      <section className="form-add-artist">
        <h1 className="form__title">ADD ARTIST</h1>

        <form
          action=""
          className="form__add-artist"
          onSubmit={handleSubmit(getFormData)}
        >
          <div className="form__inputs-columnOne">
            <label htmlFor="form__input-file">
              UPLOAD IMAGE
              <div className="form__container--input">
                <input
                  type="file"
                  id="form__input-file"
                  ref={inputFile}
                  {...register("artistImage")}
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
                  type="text"
                  id="form__input-text"
                  {...register("artistName")}
                />
              </div>
            </label>

            <label htmlFor="form__input-select">
              CATEGORY
              <div className="form__container--input">
                <select type="text" id="form__input-select">
                  <option value="">select category</option>
                  {categories.map((a, b) => (
                    <option key={b} value={a} {...register("artistCategory")}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label htmlFor="form__input-select">
              TYPE ART
              <div className="form__container--input">
                <select type="text" id="form__input-select">
                  <option value="">select type</option>
                  {typeArt.map((a, b) => (
                    <option key={b} value={a} {...register("artistTypeArt")}>
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
                {...register("artistDescription")}
              ></textarea>
            </label>

            <label htmlFor="form__input-artwork">
              SELECT ARTWORK
              <div className="form__container--input">
                <select type="text" id="form__input-artwork">
                  <option value=""></option>
                  {artwork.map((a) => (
                    <option
                      key={a.id}
                      value={a.artworkName}
                      {...register("artistArtwork")}
                    >
                      {a.artworkName}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          </div>

          <div className="form__button">
            <Link to="/react-marketplace/dashboard">
              <ButtonSmall text={"SAVE"} color={"black"} width={"20rem"} />
            </Link>
          </div>
        </form>
      </section>
    </StyledFormAddArtist>
  );
};

export default AddArtistForm;
