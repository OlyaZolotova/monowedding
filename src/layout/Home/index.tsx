import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import React from "react";
import { Main} from "../../units/Main/Main";
import { Greetings } from "../../units/Greetings/Greetings";
import { Details } from "../../units/Details/Details";
import { Location } from "../../units/Location/Location";
import "../../fonts/Kitsor\ Rauttie.ttf";
import { Contacts } from "../../units/Contacts/Contacts";
import { Form } from "../../units/Form/Form";
import  Timer  from "../../units/Timer/Timer";
import { Timing } from "../../units/Timing/Timing";

const Home = () => {


  return (
    <div>
      <div>
        <Main />
        <Greetings />
        <Timing/>
        <Location />
       <Details />
       <Form/>
       <Timer/>
       <Contacts/>
      </div>
    </div>
  );
};

export default Home;
