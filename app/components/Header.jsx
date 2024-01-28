import React from 'react'

export default function header() {
  return (
    <div className="header">
      <div className="company flex ">
      <div className="logo"></div>
      <div>Fast Comp</div>

      </div>


      <div className="sections">
       <a href='#packets' className="packets">პაკეტები</a>
       <a href='#contacts' className="contact">კონტაქტი</a>
       <a href='#about' className="about">ჩვენს შესახებ</a>




      </div>

      <div className="signup">
      <a href="/register" class=" headerbtn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  შეკვეთა
</a>
      </div>


    </div>




  )
}
