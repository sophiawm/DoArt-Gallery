import StyledFormAddArtist from "./styled-form-add-artist";
import { dataDoArt } from "../../../data";
import { categories } from "../../pages/form-add-artist/form-add-artist";
import ButtonSmall from "../../atoms/buttons/button-small";
import InputFile from "../../atoms/inputs/input-file/input-file";
import InputSelect from "../../atoms/inputs/input-select/input-select";
import InputText from "../../atoms/inputs/input-text/input-text";
import InputTextarea from "../../atoms/inputs/input-textarea/input-textarea";


const AddArtwork = () => {

  return (
    <StyledFormAddArtist>
      <header></header>
      <section className="form-add-artist">
        <h1>ADD AN ARTIST</h1>
        <form action="" className="form__add-artist">
        <InputFile title={'UPLOAD IMAGE'} gap={'1'}/>
        <InputText title={'ARTWORK NAME'} gap={'1'}/>
        <InputText title={'DIMENSIONS'} gap={'1'}/>
        <InputText title={'MATERIALS'} gap={'1'}/>
        <InputSelect title={'CATEGORY'} gap={'1'} map={categories}/>
        <InputTextarea title={'DESCRIPTION'} gap={'1'}/>
        <InputSelect title={'SELECT ARTIST'} gap={'1'} map={dataDoArt.map((a)=> a.artist)}/>
        <ButtonSmall text={'SAVE'} color={'black'} width={'20rem'}/>
        </form>
      </section>
      <footer></footer>
    </StyledFormAddArtist>
  );
};

export default AddArtwork;

