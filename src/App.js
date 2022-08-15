import Header from './components/Header';
import TotalBalance from './components/TotalBalance';

function App() {
  return (
    <div className="w-screen h-screen overflow-auto flex flex-col items-center justify-center bg-[#F5F7FB]">
      <Header />
      <TotalBalance />
    </div>
  );
}

export default App;