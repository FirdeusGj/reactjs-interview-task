import React, { useState } from "react";
import "./Notes.css";
import { useParams } from "react-router-dom";

export default function File() {
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [noteInfo, setNoteInfo] = useState([]);

  const cancelButton = () => {
    setClicked(false);
  };

  const createButton = () => {
    const titleInput = document.querySelector(".createNote__input input");
    const descriptionTextarea = document.querySelector(
      ".createNote__textarea textarea"
    );

    if (!titleInput.value || !descriptionTextarea.value) {
      alert("Please type something");
      return;
    }

    const newNote = {
      id: noteInfo.length + 1,
      title: titleInput.value,
      para: descriptionTextarea.value,
      routeId: id,
    };

    setNoteInfo([...noteInfo, newNote]);
    setClicked(false);
    titleInput.value = "";
    descriptionTextarea.value = "";
  };

  const deleteNote = (title) => {
    const updatedNotes = noteInfo.filter((note) => note.title !== title);
    setNoteInfo(updatedNotes);
  };

  const clickedButton = () => {
    setClicked(true);
  };

  const filteredNotes = noteInfo.filter((note) => {
    return (
      note.routeId === id &&
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.para.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <section className="notes__section">
      <div className="notes__wrapper">
        <div className="createNotes">
          {id && (
            <div
              onClick={clickedButton}
              className="createNotes__button--wrapper"
            >
              <div className="createNotes__button">
                <button>Create Note</button>
              </div>
              <div className="createNotes__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </div>
            </div>
          )}
          <div className="createNotes__input--wrapper">
            <div className="createNotes__input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        {filteredNotes.map((elem) => (
          <div className="notes__info" key={elem.id}>
            <div className="notes__text">
              <h2>{elem.title}</h2>
              <p>{elem.para}</p>
            </div>
            <div className="notes__deleteButton">
              <button
                onClick={() => deleteNote(elem.title)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {id && (
        <div className={clicked ? `createNote__wrapper` : "displayNone"}>
          <div className="createNote">
            <div className="createNote__input">
              <input type="text" placeholder="Title" />
            </div>
            <div className="createNote__textarea">
              <textarea placeholder="Description" cols="30" rows="10" />
            </div>
            <div className="createNote__buttons">
              <button onClick={createButton}>Create</button>
              <button onClick={cancelButton}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
