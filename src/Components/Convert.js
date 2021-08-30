import React, {useEffect, useState} from 'react'
import axios from 'axios'
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({language, text}) => {

    useEffect(() => {
        console.log('lang or text change')
    }, [language, text])

    return(
        <div />
    )

}

export default Convert 