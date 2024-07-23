import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/auth/Actions";
import { useEffect } from "react";
import { fetchProject } from "./redux/project/Action";
import UpgradeSuccessPage from "./pages/Subscription/UpgradeSuccessPage";
import AcceptInvitationPage from "./pages/Project/AcceptInvitationPage";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
    //dispatch(fetchProject({}));
  }, [auth.jwt, dispatch]);

  useEffect(() => {
    dispatch(fetchProject({}));
  }, [dispatch]);

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:id/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade_plan" element={<Subscription />} />
            <Route
              path="/upgrade_Plan/success"
              element={<UpgradeSuccessPage />}
            />
            <Route
              path="/accept_invitation"
              element={<AcceptInvitationPage />}
            />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
