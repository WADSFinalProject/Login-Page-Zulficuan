import '../css/LoginPage.css'
import DateInput from './DateInput'
import DropDown from './DropDown'
import PasswordInput from './PasswordInput'
import RegisterText from './RegisterText'
import TextInput from './TextInput'

// eslint-disable-next-line react/prop-types
function RegisterPrimary({click, currentState}) {
  return (
    <div>
      <form className='RegisterContainer'>
        <label className='TitleRegister'>Register</label>
        <TextInput label={"Fullname"} color={'green'}/>
        <DropDown label={"Role"} />
        <DateInput color={'green'} />
        <PasswordInput label={"Password"} color={'green'}/>
        <PasswordInput label={"Confirm Password"} color={'green'}/>
        <div className='RememberMe'>
          <label className='CheckText'>
            <input type='checkbox' className='TickBox'></input> I Agree To The Terms and Conditions
          </label>
        </div>
        <button type='submit' className='RegisterButton'>Register</button>
        <label className='ShowTextRegister'>{`Already have an account?`} <RegisterText handleClick={click} status={currentState} showText={'Login'}/></label>
      </form>
    </div>
  )
}

export default RegisterPrimary