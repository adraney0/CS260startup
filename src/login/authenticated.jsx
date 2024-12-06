import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameNotifier, GameEvent } from '../play/gameNotifier'; 
import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  function handlePlay() {
    // Broadcast the start event before navigating to the /play page
    GameNotifier.broadcastEvent(props.userName, GameEvent.Start, {});

    // Navigate to the play page
    navigate('/play');
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button className='btn-main' onClick={handlePlay}>
        Play
      </Button>
      <Button className='btn-second' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
