
      function changeColor(bikeId, color) {
        const img = document.getElementById(`${bikeId}-img`);
       img.src = `./images/${bikeId}-${color}.jpg`;

      }

      function toggleSpecs(el) {
        const arrow = el.querySelector('.arrow');
        const content = el.nextElementSibling;
        const visible = content.style.display === 'block';
        content.style.display = visible ? 'none' : 'block';
        arrow.style.transform = visible ? 'rotate(0deg)' : 'rotate(180deg)';
      }