import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInTV from './pages/SignInTV/SignInTV';
import Gymnastics from './pages/gymnastics/Gymnastics';
import Quiz from './pages/Quiz/Quiz';
import QuizStart from './pages/Quiz/QuizStart';
import Diary from './pages/Diary/Diary';
import OverlayR2 from './pages/Overlay/Overlay_R2';
import VideoModal from './components/ChildModal/ViedoModal';
// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OverlayR2 />} />
        <Route path="/sign-in" element={<SignInTV />} />
        {/* gymnastics */}
        <Route path="/gymnastics" element={<Gymnastics />} />
        <Route path="/streaming" element={<VideoModal />} />
        {/* Quiz */}
        <Route path="/quiz/start" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Diary */}
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </Router>
  );
}

export default App;
