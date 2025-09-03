import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Plus, LogIn, Video, Brain, Settings, Bell, Search, Sparkles, BookOpen, Coffee, Gamepad2 } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [selectedMode, setSelectedMode] = useState<'fun' | 'study'>('fun');

  const handleCreateRoom = () => {
    const roomId = Math.random().toString(36).substr(2, 9);
    navigate(`/room/${selectedMode}/${roomId}`);
  };

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      navigate(`/room/${selectedMode}/${roomCode}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gatherly
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search rooms..."
                  className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">John!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to connect with others? Choose your mode and start your journey.
          </p>
        </div>

        {/* Mode Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            onClick={() => setSelectedMode('fun')}
            className={`group cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              selectedMode === 'fun'
                ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-pink-50 shadow-lg'
                : 'border-gray-200 bg-white/70 hover:border-orange-200'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                selectedMode === 'fun'
                  ? 'bg-gradient-to-r from-orange-400 to-pink-500 scale-110'
                  : 'bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-110'
              }`}>
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedMode === 'fun'
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300 group-hover:border-orange-400'
              }`}>
                {selectedMode === 'fun' && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fun Mode</h3>
            <p className="text-gray-600 mb-6">
              Connect with friends, share entertainment, and enjoy quality time together with video calls, screen sharing, and integrated platforms.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex items-center">
                <Video className="w-3 h-3 mr-1" />
                Video Calls
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm flex items-center">
                <Coffee className="w-3 h-3 mr-1" />
                Entertainment
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Screen Share</span>
            </div>
          </div>

          <div
            onClick={() => setSelectedMode('study')}
            className={`group cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              selectedMode === 'study'
                ? 'border-green-300 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg'
                : 'border-gray-200 bg-white/70 hover:border-green-200'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                selectedMode === 'study'
                  ? 'bg-gradient-to-r from-green-400 to-blue-500 scale-110'
                  : 'bg-gradient-to-r from-green-400 to-blue-500 group-hover:scale-110'
              }`}>
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedMode === 'study'
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300 group-hover:border-green-400'
              }`}>
                {selectedMode === 'study' && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Mode</h3>
            <p className="text-gray-600 mb-6">
              Enhance your learning with AI-powered tools, Deep Think RAG system, collaborative features, and advanced study utilities.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center">
                <Brain className="w-3 h-3 mr-1" />
                AI Assistant
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center">
                <BookOpen className="w-3 h-3 mr-1" />
                Deep Think
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Study Tools</span>
            </div>
          </div>
        </div>

        {/* Room Actions */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h2>
              <p className="text-gray-600">Create a new room or join an existing one</p>
            </div>

            <div className="space-y-6">
              <button
                onClick={handleCreateRoom}
                className="group w-full p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Plus className="w-6 h-6 mr-3 group-hover:rotate-90 transition-transform duration-300" />
                <div>
                  <div className="text-lg font-semibold">Create New Room</div>
                  <div className="text-sm opacity-90">Start a new {selectedMode} session</div>
                </div>
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-gray-600">or</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Room Code</label>
                  <input
                    type="text"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    placeholder="Enter room code (e.g., abc123xyz)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <button
                  onClick={handleJoinRoom}
                  disabled={!roomCode.trim()}
                  className="group w-full p-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <LogIn className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <div className="font-semibold">Join Room</div>
                    <div className="text-sm text-gray-500">Enter an existing session</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Rooms */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Rooms</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: '1', name: 'Team Study Session', type: 'study', participants: 4, time: '2 hours ago' },
              { id: '2', name: 'Movie Night', type: 'fun', participants: 8, time: '1 day ago' },
              { id: '3', name: 'Math Homework Help', type: 'study', participants: 3, time: '3 days ago' },
            ].map((room) => (
              <div
                key={room.id}
                className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    room.type === 'fun' 
                      ? 'bg-gradient-to-r from-orange-400 to-pink-500'
                      : 'bg-gradient-to-r from-green-400 to-blue-500'
                  }`}>
                    {room.type === 'fun' ? 
                      <Gamepad2 className="w-6 h-6 text-white" /> :
                      <Brain className="w-6 h-6 text-white" />
                    }
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    room.type === 'fun' 
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {room.type}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {room.name}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{room.participants} participants</span>
                  <span>{room.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;