import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";
import { NavInner } from "../../containers/navbar";
const height = { height: "120vh" };

const btnFont = { color: "#F1562C" };
const bg = { background: "#FFF" };
const section = { background: "#FFF" };
const ArticaleInner = () => {
  const routerParams = useParams();
  const [selectedArticale, setSelectedArticale] = useState({});
  const [courseArticales, setCourseArticales] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const [articale, setArticale] = useState({});
  useEffect(() => {
    if (routerParams) {
      firebase
        .firestore()
        .collection("articales")
        .where("id", "==", routerParams.id)
        .get()
        .then((snapshot) => {
          if (snapshot && snapshot.docs[0]) {
            setArticale(snapshot.docs[0].data());
            setCourseArticales(snapshot.docs[0].data().articale);
          }
        })
        .catch((error) => {
          debugger;
        });
    }
  }, [routerParams]);
  useEffect(() => {
    if (courseArticales) {
      setSelectedArticale(courseArticales[0]);
    }
  }, [articale]);
  return (
    <>
      <NavInner />
      <section className="py-5" style={section}>
        <div className="h-100 m-auto text-center w-100 py-5">
          <h2 className="my-5 " style={{ fontWeight: "bold" }}>
            {articale && articale.title}
          </h2>
          <div className="w-100 h-100">
            <iframe
              className="embed-responsive w-100 "
              style={height}
              src={articale.link}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticaleInner;
