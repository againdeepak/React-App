import React, { useState } from 'react'
export default function About() {
    const [btnText, setBtnText] = useState("Dark")
    const changeBtn = () => {
        if (btnText === 'Dark') {
            setBtnText("Light");
            setstyle({
                color: 'white',
                backgroundColor: 'black'
            })
        }
        else {
            setBtnText("Dark")
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }
    const [bg, setbg] = useState('Yellow')
    const bgImage=()=>{
        if(bg==='Yellow'){
            setbg('White')
            setstyle({
                color: 'black',
                backgroundColor: 'yellow'
            })
        }
        else{
            setbg('Yellow')
             setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }
    const [style, setstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    return (

        <>
            <button className='btn btn-primary my-3' onClick={changeBtn}>{btnText}</button>
            <button className='btn btn-primary my-3 mx-3' onClick={bgImage}>{bg}</button>
            <div>
                <p style={style} >
                    The future of smartphones is finally here! Own the next-gen Galaxy Z Flip5 and Galaxy Z Fold5 and unfold your world like never before
                    The future of smartphones is finally here! Own the next-gen Galaxy Z Flip5 and Galaxy Z Fold5 and unfold your world like never before
                    'Everyone knows what Shaheen will do': Salman Butt favours Pakistan over India in Asia Cup blockbuster
                    'Everyone knows what Shaheen will do': Salman Butt favours Pakistan over India in Asia Cup blockbuster
                    'Openers already know my gameplan': Shaheen Afridi ahead of India-Pakistan Asia Cup clash
                    'Openers already know my gameplan': Shaheen Afridi ahead of India-Pakistan Asia Cup clash
                    India vs Pakistan, Asia Cup: Virat Kohli vs Shaheen Afridi and other player battles to watch out for
                    Virat Kohli and Shaheen Afridi
                    NEW DELHI: The mother of all cricket battles is back. India and Pakistan will face each other in a One-Day International for the first time since the 2019 World Cup in England. The much-awaited contest on Saturday in the Asia Cup group stage will set the ball rolling for many such clashes between the two arch-rivals this year.
                    There is a chance of India and Pakistan playing each other as many as three times in the Asia Cup itself - first in the group stage, then in the Super Four stage and if all goes as petr cricket fans' wishes, again in the summit clash too. Then there is the ICC ODI World Cup in India, starting on October 5 in Ahmedabad, where the two teams are again in the same group. Fans have a full menu this year after a long wait.
                </p>
            </div>
        </>

    )
}
