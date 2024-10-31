import React from 'react';

export function Login() {
  return (
    <main className = "container-fluid bg-second text-center">
        <h2>Welcome to Triangular Peg Solitaire</h2>
        <form method = "get" action = "play.html">
            <div className = "input-group mb-3">
                <span className = "input-group-text">Email</span>
                <input className = "form-control" type = "email" placeholder = "your@email.com" />
            </div>
            <div class = "input-group mb-3">
                <span className = "input-group-text">Password</span>
                <input className = "form-control" type = "password" placeholder = "password" />
            </div>
            <button type = "submit" className = "btn btn-main">Sign In</button>
            <button type = "submit" className = "btn btn-second">Create Account</button>
        </form>
        <hr />
    </main>
  );
}