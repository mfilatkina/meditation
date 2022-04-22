import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "../../pages/profile/Profile";
import Login from "../../pages/login/Login";
import LessonsList from "../../pages/lessonsList/LessonsList";
import Lesson from "../../pages/lesson/Lesson";
import Timer from "../../pages/timer/Timer";

import "../../style/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="lessons">
            <Route index element={<LessonsList />} />
            <Route path=":id" element={<Lesson />} />
          </Route>
          <Route path="timer" element={<Timer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
