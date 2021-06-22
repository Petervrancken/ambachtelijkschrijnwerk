import axios from "axios";
import Link from "next/link";
import DownArrow from "../public/downarrow.svg";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Comment() {
  const router = useRouter();
  const [privateCookie, setPrivateCookie] = useState({});
  useEffect(() => {
    Cookies.get("cookieData")
      ? setPrivateCookie(JSON.parse(Cookies.get("cookieData")))
      : router.push("/login");
  }, []);

  console.log(privateCookie);

  //console.log(privateCookie.data.id);
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //console.log(data.user);
    axios
      .post(URL + "/api/comments", {
        rating: Number(data.rating),
        beschrijving: data.beschrijving,
        user: "/api/users/" + privateCookie.data.id, //dynamisch via doorgegeven CookieID
      })
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="shop-container">
        <div className="profiel-tabs-wide">
          <Link href="/profiel">
            <a title="ga naar profiel">
              <button className="profiel-tab-button">Profiel</button>
            </a>
          </Link>
          <Link href="/history">
            <a title="ga naar history">
              <button className="profiel-tab-button">History aankopen</button>
            </a>
          </Link>
          <Link href="/comment">
            <a title="ga naar comment">
              <button className="profiel-tab-button-actief">
                Geef een comment
              </button>
            </a>
          </Link>
        </div>

        <div className="profiel-tabs-small">
          <div className="dropdown">
            <Link href="/comment">
              <a title="ga naar comment">
                <button className="profiel-tab-button-actief">
                  Geef een comment
                  <DownArrow className="profiel-tab-icoon" />
                </button>
              </a>
            </Link>
            <div className="dropdown-content">
              <Link href="/history">
                <a title="ga naar history">
                  <p className="textdropdown">History aankopen</p>
                </a>
              </Link>
              <Link href="/profiel">
                <a title="ga naar profiel">
                  <p className="textdropdown">Profiel</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="sloganTheme">
            <p className="profile-title">wij horen het graag van u:</p>
            {data && (
              <p fontSize="12px" color="white">
                post gelukt
              </p>
            )}

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("rating", { required: true })}
                className="comment-rating"
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="10"
              />
              <p className="score">/10</p>
              <textarea
                {...register("beschrijving", { required: true })}
                className="login-input"
                id="question"
                placeholder="zet hier uw commentaar..."
              ></textarea>
              <input
                type="hidden"
                defaultValue="/api/users/8"
                {...register("user")}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <button className="button-submit" type="submit">
                verzenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
