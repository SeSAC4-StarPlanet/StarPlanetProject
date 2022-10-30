import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./MakePlanetPage.scss";
import Headers from "../../components/Common/Diary/Header/Header";
import StarMap from "./StarMap";
import MakePlanetInput from "../../components/Common/MakePlanet/MakePlanetInput";
import MakePlanetSelect from "../../components/Common/MakePlanet/MakePlanetSelect";
import MakePlanetSelectHeader from "../../components/Common/MakePlanet/MakePlanetSelectHeader";
import planet1 from "../../assets/img/Planet/planet1.png";
import planet2 from "../../assets/img/Planet/planet2.png";
import planet3 from "../../assets/img/Planet/planet3.png";
import planet4 from "../../assets/img/Planet/planet4.png";
import MakePlanetMember from "../../components/Common/MakePlanet/MakePlanetMember";
import MakeMember from "../../components/Common/MakePlanet/MakeMember";
import MakeMemberBtn from "../../components/Common/MakePlanet/MakeMemberBtn";
import axios from "axios";
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')


const MakePlanetPage = () => {
  const [planetName, setplanetName] = useState("");
  // const [planetSelect, setplanetSelect] = useState(""); //TODO
  const [userId, setuserId] = useState("");
  // const [userId2, setuserId2] = useState("");
  // const [userId3, setuserId3] = useState("");
  // const navigate = useNavigate();

  const handlePlanet = () => {
    console.log(planetName, userId);

    axios({
      method: "post",
      url: "http://localhot:8000/api/planet",
      header: { withCredentials: true },
      data: {
        name: planetName,
        member: userId,
        // select: planetSelect,
      }
    })
      .then((res) => {
        console.log(res);
        // navigate('/workspace/main');
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <StarMap />
      <Headers />
      <div className="makePlanetSection">
        <div className="makePlanetContainer">
          <MakePlanetInput
            onChange={(e) => {
              setplanetName(e.target.value);
              console.log(e.target.value);
            }}
          />

          <MakePlanetSelectHeader value={"행성선택"} />
          <div className="planetBox">
            <MakePlanetSelect src={planet1} />
            <MakePlanetSelect src={planet2} />
            <MakePlanetSelect src={planet3} />
            <MakePlanetSelect src={planet4} />
          </div>
          <MakePlanetSelectHeader value={"행성멤버"} />
          <MakePlanetMember
            text={"멤버1"}
            // value={userID}
            onChange={(e) => {
              setuserId(e.target.value);
              console.log(e.target.value);
            }}
          />

          <MakePlanetMember
            text={"멤버2"}
            // value={userID}
            onChange={(e) => {
              // setuserId(e.target.value);
              console.log(e.target.value);
            }}
          />
          <MakePlanetMember
            text={"멤버3"}
            // value={userID}
            onChange={(e) => {
              // setuserId(e.target.value);
              console.log(e.target.value);
            }}
          />

          <MakeMember sx={{ width: "100%" }} />
          <button onClick={handlePlanet}>등록</button>
          <MakeMemberBtn>
          </MakeMemberBtn>


        </div>
      </div>
    </div>
  );
};

export default MakePlanetPage;
