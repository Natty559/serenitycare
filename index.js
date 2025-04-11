function showMessage() {
    const tips = [
      "Always carry a power bank!",
      "Learn basic phrases of the local language.",
      "Scan important documents before your trip.",
      "Try local food, but be cautious with street vendors.",
      "Travel light and pack smart."
    ];
  
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('tip').textContent = tips[randomIndex];
  }
  