import React from 'react';
import { useOrderContext } from '../context/OrderModalContext';
import './Hero.css';

export default function Hero() {
  const { openModal } = useOrderContext();

  return (
    <section className="hero">
      <div className="paw-background">
        <div className="paw paw-1">🐾</div>
        <div className="paw paw-2">🐾</div>
        <div className="paw paw-3">🐾</div>
        <div className="paw paw-4">🐾</div>
        <div className="paw paw-5">🐾</div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Your Pet, On Every Page.</h1>
          <p className="hero-subtitle">
            Custom stationery featuring your fur baby in adorable chibi, caricature & cartoon art.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => openModal()}>
              Shop Now
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </button>
          </div>

          <div className="floating-badges">
            <div className="badge">🐾 100% Personalized</div>
            <div className="badge">🎁 Perfect Gift</div>
            <div className="badge">✨ Chibi • Caricature • Cartoon</div>
          </div>
        </div>

        <div className="hero-image">
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
          <div className="pet-icons">
            <span className="pet-icon">📓</span>
            <span className="pet-icon">📔</span>
            <span className="pet-icon">📒</span>
          </div>
        </div>
      </div>
    </section>
  );
}
