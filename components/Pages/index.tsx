import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";
import { useEffect } from "react";
import 'boxicons/css/boxicons.min.css';

export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.styles;
  let name= "Weather Information";
  return (
    <div style={{ direction: "rtl", minHeight: "11vh", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "20px", color: "black",fontFamily:"Arial" }}>{name}</h1>
      <Window
        style={{
          minHeight: 100,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.01)",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          color: "white",
          padding: "20px",
          paddingBottom:"0.5",
          marginBottom: "20px",
          marginTop:"50px",
          backdropFilter: "blur(1px)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className='bx bxs-moon' style={{ color: "white", fontSize: "50px", marginRight: "10px" }}></i>
            <div style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", direction: "ltr" }}>
              {props.astronomy2}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <i className='bx bxs-sun' style={{ color:"white", fontSize: "50px", marginRight: "10px" }}></i>
            <div style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", direction: "ltr" }}>
              {props.astronomy}
            </div>
          </div>
        </div>
      </Window>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <Window
            style={{
              minHeight: 200,
              width: "45%",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)",
              color: "white",
              padding: "20px",
              backdropFilter: "blur(1px)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <i className='bx bxs-thermometer' style={{ color: "white", fontSize: "50px", marginBottom: "10px" }}></i>
              <div style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", marginTop: 5 }}>
                {props.condition}°C
              </div>
              <div style={{ margin: 20 }}>FeelsLikeC</div>
            </div>
          </Window>
          <Window
            style={{
              minHeight: 200,
              width: "45%",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: "white",
              padding: "20px",
              backdropFilter: "blur(1px)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <i className='bx bxs-cloud' style={{ color: "white", fontSize: "50px", marginBottom: "10px" }}></i>
              <div style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2" }}>
                {props.condition2}°C
              </div>
              <div style={{ margin: 20 }}>Cloudy</div>
            </div>
          </Window>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <Window
            style={{
              minHeight: 200,
              width: "45%",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: "white",
              padding: "20px",
              backdropFilter: "blur(1px)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}

            >
              <i className='bx bxs-droplet' style={{ color: "white", fontSize: "50px", marginBottom: "10px" }}></i>
              <div style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", marginTop: 5 }}>
                {props.condition3}°C
              </div>
              <div style={{ margin: 20, }}>Humidity</div>
            </div>
          </Window>
          <Window
            style={{
              minHeight: 200,
              width: "45%",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: "white",
              padding: "20px",
              backdropFilter: "blur(1px)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <i className='bx bxs-cloud-rain' style={{ color: "white", fontSize: "50px", marginBottom: "10px" }}></i>

              <div style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2" }}>
                {props.weather}°C
              </div>
              <div style={{ margin: 20 }}>Rain</div>
            </div>
          </Window>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch("https://irmapserver.ir/research/api/weather/"); //status code
  let data = await res.json();
  let condition = await data.current_condition;
  let astronomy = await data.astronomy;
  let weather= await data.weather;
  let hourly= await data.hourly;

  console.log(condition[0].temp_C);
  console.log(condition[0].cloudcover);
  console.log(data.weather[0].hourly[0].chanceofrain)
  console.log(data.weather[0].astronomy[0].sunrise)
  console.log(data.weather[0].astronomy[0].moonrise)

  return {
    props: {
      data: global.QSON.stringify({
        condition: condition[0].temp_C,
        condition2: condition[0].cloudcover,
        condition3: condition[0].humidity,
        weather :weather[0].hourly[0].chanceofrain ,
        astronomy: weather[0].astronomy[0].sunrise,
        astronomy2: weather[0].astronomy[0].moonrise,
        session,
      }),
    },
  };
}
