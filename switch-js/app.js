const Switche = document.querySelectorAll('.toggle-switch input[type="checkbox"]');

for (let i = 0; i < Switche.length; i++) {
  Switche[i].addEventListener('click', (event) => {

    for (let j = 0; j < Switche.length; j++) {
      if (Switche[j] !== event.target) {
        Switche[j].checked = false;
      }
    }
    const random = Math.floor(Math.random() * 5) + 1;

    document.getElementById(`checkbox${random}`).checked = true;
    console.log(true);
  });
}