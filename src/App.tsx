import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/add-recipe'>
          <AddRecipePage />
        </Route>
        <Route path='/detail'>
          <RecipeDetailPage />
        </Route>
        <Route path='/profile'>
          <ProfilePage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
          <LogInPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
