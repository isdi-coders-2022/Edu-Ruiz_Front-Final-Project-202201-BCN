/* eslint-disable @next/next/no-img-element */
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createAnimeThunk } from "../../redux/thunks/animeThunks";
import toastMessage from "../../utils/toastNotify";
import Router from "next/router";

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff006a;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.64);
  height: 500px;
  width: 500px;

  & ul {
    & li {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 30px;
      width: 222px;

      & section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        height: 80px;
        & .hidden {
          display: none;
        }

        & .imageSize {
          object-position: center;
          object-fit: cover;
          height: 100px;
          width: 70px;
          border: 2px solid #000;
          box-shadow: 3px 3px 3px 0px #000;
          border-radius: 5px;
          transition: 0.4s;
          z-index: 99;
        }

        & .imageSize:active {
          height: 200px;
          width: 150px;
          border: 2px solid #000;
          box-shadow: 3px 3px 3px 0px #000;
          border-radius: 5px;
        }

        & .title {
          font-family: "Readex Pro";
          color: #000;
          padding: 0;
          margin: 0;
        }
      }
      & .userReg {
        color: #b8bbbe;
      }
      & label {
        font-family: "Readex Pro";
        margin-bottom: 7px;
        color: #000;
      }
      & input {
        font-family: "Readex Pro";
        background-color: #000;
        border: 1px solid #000;
        padding: 10px;
        color: #fff;
        width: 100%;
        outline: none;
        border-radius: 3px;
      }

      & .custom-file-input {
        position: relative;
        display: inline-block;
        cursor: pointer;
      }
      & .custom-file-input::before {
        background-color: #000;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        content: "Seleccionar";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

      & .custom-file-input input[type="file"] {
      }

      & #image::before {
        content: "select file";
      }

      & button {
        width: 100%;
        background-color: #0009;
        padding: 10px;
        border: 1px solid #000;
        list-style: none;
        text-decoration: none;
        color: #fff;
      }

      & .buttonActive {
        background-color: #000;
      }
      & p {
        width: 244px;
        margin-top: 10px;
        font-size: 13px;
        color: #70747a;
        & .link {
          color: #5765f2;
          text-decoration: none;
        }
      }
    }
  }
`;

const NewAnime = (): JSX.Element => {
  const dispatch = useDispatch();

  const blannkFields: any = {
    name: "",
    autor: "",
    image: "",
  };

  const imageUrl: any = {
    imageDefault: "",
  };

  const [formData, setFormData] = useState(blannkFields);
  const [imgData, setImgData] = useState(imageUrl);

  const isInvalid =
    formData.autor === "" || formData.name === "" || !formData.image;

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };

  const changeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFileData: any = event.target.files;
    setFormData({ ...formData, image: imageFileData[0] });

    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        await setImgData({ ...imgData, imageDefault: reader.result });
      }
    };

    if (imageFileData[0]) {
      await reader.readAsDataURL(imageFileData[0]);
    }
  };

  const submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const returnDispatch: any = await dispatch(createAnimeThunk(formData));
    if (!returnDispatch.errorCode) {
      Router.push("/");
    } else {
      toastMessage("this anime already exists 🙈", "error");
    }
  };

  return (
    <>
      <FormContainer
        className="form-container"
        onSubmit={submitForm}
        autoComplete="off"
        noValidate
      >
        <ul>
          <li>
            <section>
              <h1 className="title">New Anime</h1>
              <img
                src={imgData.imageDefault}
                alt="image-preview"
                id="img"
                className={!imgData.imageDefault ? "hidden" : "imageSize"}
              />
            </section>
          </li>
          <li>
            <label title="name" htmlFor="name">
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={changeData}
              required
            />
          </li>
          <li>
            <label title="autor" htmlFor="autor">
              autor
            </label>
            <input
              type="text"
              name="autor"
              id="autor"
              onChange={changeData}
              required
            />
          </li>
          <li>
            <label htmlFor="image">profile picture</label>
            <input
              title="image-upload"
              className="custom-file-input"
              type="file"
              id="image"
              name="image"
              placeholder="img"
              required
              accept=".png, .jpg, .gif"
              onChange={changeFile}
            />
          </li>
          <li>
            <button
              type="submit"
              className={isInvalid ? "button" : "buttonActive"}
              disabled={isInvalid}
            >
              Create Anime
            </button>
          </li>
        </ul>
      </FormContainer>
    </>
  );
};

export default NewAnime;
