import ButtonSmall from "../components/buttons/button-small";
import InputFile from "../components/inputs/input-file/input-file";
import InputSelect from "../components/inputs/input-select/input-select";
import InputText from "../components/inputs/input-text/input-text";
import InputTextarea from "../components/inputs/input-textarea/input-textarea";
import StyledFormAddArtist from "./styled-form-add-artist";

export const categories = ['Paintings', 'Sculpture', 'Textiles','Photography', 'Collage' ,'Mixed-media'];

const artWork = [''];

const AddArtistForm = () => {

  return (
    <StyledFormAddArtist>
      <header></header>
      <section className="form-add-artist">
        <h1>ADD AN ARTIST</h1>
        <form action="" className="form__add-artist">
        <InputFile title={'UPLOAD IMAGE'} gap={'1'}/>
        <InputText title={"ARTIST"} gap={"1"} type={'text'} />
        <InputSelect title={'CATEGRY'} gap={'1'} map={categories}/>
        <InputTextarea title={'DESCRIPTION'} gap={'1'}/>
        <InputSelect title={'SELECT ARTWORK'} gap={'1'} map={artWork.map(a=>a)}/>
        <ButtonSmall text={'SAVE'} color={'black'} width={'20rem'}/>
        </form>
      </section>
      <footer></footer>
    </StyledFormAddArtist>
  );
};

export default AddArtistForm;

