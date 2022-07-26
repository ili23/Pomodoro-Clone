import './App.css';

function App() {
  return (
    <div className=" App bg-red-400 h-screen">

      <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                  <span class="font-semibold text-gray-500 text-lg">Pomodoro Timer</span>
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-1">
              <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-red-500 transition duration-300">Dark Mode</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App;
