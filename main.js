(function () {
  const form = document.querySelector('.booking-form');

  const fields = {
    name: document.getElementById('username'),
    email: document.getElementById('email'),
    film: document.getElementById('tickets'),
    qty: document.getElementById('quantity')
  };

  const summary = {
    name: document.getElementById('s-name'),
    email: document.getElementById('s-email'),
    film: document.getElementById('s-film'),
    qty: document.getElementById('s-qty'),
    total: document.getElementById('s-total')
  };

  const priceInfo = document.getElementById('price-preview');
  const ticketPrice = 50000;

  function updateSummary() {
    summary.name.textContent = fields.name.value || '-';
    summary.email.textContent = fields.email.value || '-';
    summary.film.textContent = fields.film.options[fields.film.selectedIndex].text;
    summary.qty.textContent = fields.qty.value || '1';

    const qty = parseInt(fields.qty.value) || 0;
    const total = qty * ticketPrice;

    const formatted = `Rp ${total.toLocaleString('id-ID')}`;
    priceInfo.textContent = qty > 0 ? `Total Harga: ${formatted}` : '';
    summary.total.textContent = formatted;
  }

  Object.values(fields).forEach(el => {
    el.addEventListener('input', updateSummary);
    el.addEventListener('change', updateSummary);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    updateSummary();
    alert('Pesanan berhasil! Total harga akan dikonfirmasi melalui email.');
    form.reset();
    updateSummary();
  });

  updateSummary();
})();
