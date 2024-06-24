document.addEventListener('DOMContentLoaded', () => {
    let subtotal = 0;
    const subtotalElement = document.getElementById('subtotal');
    const payButton = document.getElementById('pay-button');
    const eventDescription = document.getElementById('event-description');

    fetch('/events')
        .then(response => response.json())
        .then(events => {
            const eventsList = document.getElementById('events-list');
            events.forEach(event => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${event.event_picture}" alt="${event.event_name}" style="max-width: 100px; max-height: 100px;">
                    <span>${event.event_name} - ${event.event_date} ${event.event_time}</span>
                `;
                li.addEventListener('click', () => {
                    fetch(`/packages/${event.event_id}`)
                        .then(response => response.json())
                        .then(packages => {
                            eventDescription.innerHTML = `<p><strong>Description:</strong> ${event.event_description}</p>`;
                            const packagesContainer = document.getElementById('packages-container');
                            const packagesList = document.getElementById('packages-list');
                            packagesList.innerHTML = '';
                            packages.forEach(pkg => {
                                const li = document.createElement('li');
                                li.textContent = `${pkg.package_name} - Rp${pkg.package_price}`;
                                li.addEventListener('click', () => {
                                    subtotal += pkg.package_price;
                                    subtotalElement.textContent = subtotal;
                                    payButton.style.display = 'block';
                                });
                                packagesList.appendChild(li);
                            });
                            packagesContainer.style.display = 'block';
                        });
                });
                eventsList.appendChild(li);
            });
        });

    payButton.addEventListener('click', () => {
        // Redirect to payment.html and pass subtotal
        const paymentURL = `payment.html?subtotal=${subtotal}`;
        window.location.href = paymentURL;
    });
});