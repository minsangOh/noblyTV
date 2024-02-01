import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInTV from './pages/SignInTV/SignInTV';
import Overlay from './pages/Overlay/Overlay';
import GymnasticsStart from './pages/gymnastics/GymnasticsStart';
import Gymnastics from './pages/gymnastics/Gymnastics';
import Quiz from './pages/Quiz/Quiz';
import QuizStart from './pages/Quiz/QuizStart';

// App 컴포넌트 내에서 라우터 설정
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/sign-in" element={<SignInTV />} />
        {/* gymnastics */}
        <Route path="/gymnastics/start" element={<GymnasticsStart />} />
        <Route path="/gymnastics" element={<Gymnastics />} />
        {/* Quiz */}
        <Route path="/quiz/start" element={<QuizStart />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;