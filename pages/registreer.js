import { useForm } from "react-hook-form";
import router, { useRouter } from "next/router";
import axios from "axios";

// verander hier je URL endpoints
const URL = "https://wdev2.be/peter21/eindwerk"; // wdev url
//const URL = "https://127.0.0.1:8000";  // local url

export default function Registreer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    axios
      .post(URL + "/api/users", {
        email: data.email,
        password: data.password,
        voornaam: data.voornaam,
        naam: data.naam,
        adres: data.adres,
      })
      .then(function (response) {
        console.log(response.data);
        router.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="backgroundTableTheme">
        <div className="sloganTheme">
          <p className="sloganText">registreer</p>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("voornaam", { required: true })}
              className="login-input"
              id="voornaam"
              type="text"
              placeholder="voornaam"
              required
            />
            <input
              {...register("naam", { required: true })}
              className="login-input"
              id="naam"
              type="text"
              placeholder="naam"
              required
            />
            <input
              {...register("adres", { required: true })}
              className="login-input"
              id="adres"
              type="text"
              placeholder="adres"
              required
            />
            <input
              {...register("email", { required: true })}
              className="login-input"
              id="email"
              type="email"
              placeholder="email"
              required
            />
            <input
              {...register("password", { required: true })}
              className="login-input"
              id="password"
              type="password"
              placeholder="wachtwoord"
              required
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <button className="button-submit" type="submit">
              verzenden
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
