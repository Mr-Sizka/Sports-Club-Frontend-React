import { Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import Match from './pages/Match';
import Team from './pages/Team';
import Login from './pages/Login';

import AdminLogin from './pages/admin/AdminLogin';
import Players from './pages/admin/Players';
import CreatePlayers from './pages/admin/CreatePlayers'
import UpdatePlayers from './pages/admin/UpdatePlayers'

import Matches from './pages/admin/Matches';
import CreateMatch from './pages/admin/CreateMatch'
import UpdateMatch from './pages/admin/UpdateMatch'

import Teams from './pages/admin/Teams';
import CreateTeam from './pages/admin/CreateTeam'
import UpdateTeam from './pages/admin/UpdateTeam'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/matches" element={<Match />} />
      <Route path="/teams" element={<Team />} />

      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin-players-view" element={<Players />} />
      <Route path="/admin-players-create" element={<CreatePlayers />} />
      <Route path="/admin-players-update" element={<UpdatePlayers />} />

      <Route path="/admin-match-view" element={<Matches />} />
      <Route path="/admin-match-create" element={<CreateMatch />} />
      <Route path="/admin-match-update" element={<UpdateMatch />} />

      <Route path="/admin-team-view" element={<Teams />} />
      <Route path="/admin-team-create" element={<CreateTeam />} />
      <Route path="/admin-team-update" element={<UpdateTeam />} />

    </Routes>
  );
};

export default AppRoutes;
