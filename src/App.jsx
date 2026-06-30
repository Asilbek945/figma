import React, { useEffect } from 'react'
import $ from "jquery";

const App = () => {

  // useEffect( ()=>{},[])

  useEffect(() => {

    let parol = "yopiq"

    $("#ikonka").click(function () {

      if (parol == "yopiq") {
        $("input").attr("type", "text")
        $("#ikonka").attr("class", "fa-solid fa-eye-slash")
        parol = "ochiq"
      }
      else {
        $("input").attr("type", "password")
        $("#ikonka").attr("class", "fa-solid fa-eye")
        parol = "yopiq"
      }

    })

  }, [])

  return (
    <div className='sayt'>

      <div className="tepa_A">
        <h1 className=''> Text  </h1>
        <img src={img1} alt="" />
      </div>
      <input type="password" placeholder='parolni kiring' />
      <i id='ikonka' class="fa-solid fa-eye"></i>
      <div className='ikki'></div>


    </div>
  )

}

export default App
