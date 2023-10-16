import { } from 'react';
import ButtonSmall from '../../atoms/buttons/button-small';
import InputText from '../../atoms/inputs/input-text/input-text';
import StyledLoginUser from './styled-login-user';


const LoginUser =()=>{
    return(
        <StyledLoginUser>
            <header></header>
            <section className='form'> 
                <h1 className='form__title'>Start your <br /> collection <br /> with us!</h1>

                <form action="" className='form__container'>

                    <div className='form__container--inputs'> 
                    


                    <InputText title={"EMAIL"} gap={"0.3"} type={'text'} />

                    <InputText title={"PASSWORD"} gap={"0.3"} type={'password'} />

                    
                    </div>

                    <div className='form__container--buttons'>
                    <ButtonSmall text={'LOGIN'} color={'black'} width={'15rem'} />
                    <ButtonSmall text={'REGISTER'} color={'black'} width={'15rem'}/>
                    </div>
                </form>
            </section>
            <footer></footer>
      
        </StyledLoginUser>
    )
}

export default LoginUser;