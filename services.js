document.addEventListener('DOMContentLoaded', () => {
    console.log('services.js loaded and executing!'); // Debugging line

    // Data extracted from "Here are our services.docx"
    const servicesData = [
        {
            category: "Logo Design",
            icon: "fas fa-lightbulb",
            items: [
                {
                    id: "logo-basic",
                    name: "Basic Logo Package",
                    price: 1500,
                    features: [
                        "High resolution png and jpeg",
                        "Transparent png",
                        "4 revisions",
                        "Basic mockup",
                        "Delivery between 1-2 days"
                    ]
                },
                {
                    id: "logo-standard",
                    name: "Standard Logo Package",
                    price: 5000,
                    features: [
                        "High resolution png, jpeg, svg",
                        "Transparent png",
                        "10 revisions",
                        "Advance mockup",
                        "Logo variation",
                        "Original file in psd and vector",
                        "User guideline in pdf format",
                        "Priority consolation and support",
                        "Delivery between 2-3 days"
                    ],
                    highlight: true // Mark as "Most Popular"
                },
                {
                    id: "logo-premium",
                    name: "Premium Logo Package",
                    price: 8000,
                    features: [
                        "Files in all format png, jpeg, svg, eps",
                        "Transparent png",
                        "Unlimited revisions",
                        "Advance mockup",
                        "Logo variation",
                        "Original file in psd and vector",
                        "User guideline in pdf format",
                        "Priority consolation and support",
                        "3 Logo animation",
                        "Delivery between 5-7 days"
                    ]
                }
            ]
        },
        {
            category: "Poster Design",
            icon: "fas fa-image",
            items: [
                {
                    id: "poster-basic",
                    name: "Basic Poster Package",
                    price: 800,
                    features: [
                        "1 Custom Poster Design",
                        "High-Resolution JPG/PNG",
                        "Ready for Social Media Sharing",
                        "Delivery: Within 24–48 hours"
                    ]
                },
                {
                    id: "poster-standard",
                    name: "Standard Poster Package",
                    price: 2000,
                    features: [
                        "3 Custom Poster Designs",
                        "Consistent Theme/Branding",
                        "High-Resolution JPG/PNG + Print-Ready PDF",
                        "Social Media Optimization",
                        "Delivery: 2–3 Days"
                    ]
                },
                {
                    id: "poster-premium",
                    name: "Premium Poster Package",
                    price: 5700,
                    features: [
                        "6 Custom Poster Designs",
                        "Advanced Visual Styling",
                        "High-Resolution JPG/PNG + Print-Ready PDF",
                        "Poster Planning Support (Themes, Concepts, Content)",
                        "Animated Poster (MP4/Video Format –Motion graphics)",
                        "Delivery: 3–5 Days"
                    ]
                }
            ]
        },
        {
            category: "Card Design",
            icon: "fas fa-id-card",
            items: [
                {
                    id: "card-basic",
                    name: "Basic Card Design Package",
                    price: 600,
                    features: [
                        "1 Custom Card Design (JPG & PDF)",
                        "Print-Ready Format (A5 or Custom Size)",
                        "Delivery: 24–48 hours"
                    ]
                },
                {
                    id: "card-standard",
                    name: "Standard Card Design Package",
                    price: 1500,
                    features: [
                        "2 Custom Card Designs",
                        "Editable Print & Digital Versions",
                        "Ready for WhatsApp/Email Sharing & Printing",
                        "Delivery: 2–3 Days"
                    ]
                },
                {
                    id: "card-premium",
                    name: "Premium Card Design Package",
                    price: 3500,
                    features: [
                        "5 Custom Card Designs",
                        "Advanced Layout & Typography",
                        "Print-Ready PDF + Digital Format",
                        "Optional Animated Card (MP4)",
                        "Delivery: 3–5 Days"
                    ]
                }
            ]
        },
        {
            category: "Printing Services",
            icon: "fas fa-print",
            items: [
                // For simplicity, using a single price point or range for printing services
                { id: "print-a4-glossy", name: "A4 Poster Printing (Glossy/Matte)", price: 80, features: ["Per piece estimate"] },
                { id: "print-a4-photo", name: "A4 Poster Printing (Photo Paper)", price: 150, features: ["Per piece estimate"] },
                { id: "print-a3-glossy", name: "A3 Poster Printing (Glossy/Matte)", price: 200, features: ["Per piece estimate"] },
                { id: "print-a3-photo", name: "A3 Poster Printing (Photo Paper)", price: 300, features: ["Per piece estimate"] },
                { id: "print-a2-glossy", name: "A2 Poster Printing (Glossy/Matte)", price: 500, features: ["Per piece estimate"] },
                { id: "print-a2-photo", name: "A2 Poster Printing (Photo Paper)", price: 700, features: ["Per piece estimate"] },
                { id: "print-a1-standard", name: "A1 Poster Printing (Standard Quality)", price: 1200, features: ["Per piece estimate"] },
                { id: "print-a1-high", name: "A1 Poster Printing (High Quality)", price: 1800, features: ["Per piece estimate"] },
                { id: "print-a0-standard", name: "A0 Poster Printing (Standard Quality)", price: 2500, features: ["Per piece estimate"] },
                { id: "print-a0-high", name: "A0 Poster Printing (High Quality)", price: 4000, features: ["Per piece estimate"] },
                { id: "print-business-100", name: "Business Card Printing (100 pcs, Double Side)", price: 1200, features: ["Material: 300–350gsm art card"] },
                { id: "print-invite-50", name: "Invitation Card Printing (50 pcs, With Envelopes)", price: 2200, features: ["Material: 250–300gsm art card"] },
                { id: "print-greeting-50", name: "Greeting Card Printing (50 pcs, +Envelope)", price: 700, features: ["Material: 250–300gsm art card"] },
                { id: "print-gift-100", name: "Gift Tags / Small Cards Printing (100 pcs)", price: 1200, features: ["Material: 250gsm or 300gsm artboard"] }
            ]
        },
        {
            category: "Videography",
            icon: "fas fa-video",
            items: [
                { id: "video-trailer-editing", name: "Trailer Editing", price: 7000, features: ["Creative video production"] },
                { id: "video-movies", name: "Movie Production", price: 20000, features: ["Creative video production"] },
                { id: "video-documentary", name: "Documentary Production", price: 15000, features: ["Creative video production"] },
                { id: "video-song-trailer", name: "Song Trailer", price: 5000, features: ["Creative video production"] },
                { id: "video-event", name: "Event Videography", price: 10000, features: ["Creative video production"] },
                { id: "video-biz-aboutus", name: "Business Video Advertisements (About Us)", price: 50000, features: ["Promotional video"] },
                { id: "video-biz-launch", name: "Business Launch Video", price: 10000, features: ["Promotional video"] },
                { id: "video-biz-services", name: "Services Promotional Video", price: 30000, features: ["Promotional video"] },
                { id: "video-promo-school-org-event", name: "School/Organization/Event Promotions", price: 10000, features: ["Promotional video"] },
                { id: "video-movie-post-doc", name: "Movie Post-Production (Documentary)", price: 100000, features: ["Range: KES 80,000-200,000"] }, // Using average price for range
                { id: "video-explainer-anim", name: "Explainer Animations for Presentations", price: 30000, features: ["Animation services"] },
                { id: "video-social-media", name: "Social Media Videos/Reels/Status Videos", price: 5000, features: ["Range: KES 2,000-10,000"] }, // Using average price for range
                { id: "video-item-promo", name: "Item Video Promotions", price: 40000, features: ["Product video"] }
            ]
        },
        {
            category: "Audiography",
            icon: "fas fa-headphones-alt",
            items: [
                { id: "audio-voice-overs", name: "Audio Voice Overs", price: 300, features: ["Per sentence"] },
                { id: "audio-radio-promo", name: "Radio Program Promotions", price: 5000, features: ["Professional sound design"] },
                { id: "audio-sound-mixing", name: "Sound Mixing", price: 20000, features: ["Professional sound design"] },
                { id: "audio-biz-promo", name: "Business Audio Promotions", price: 6000, features: ["Professional sound design"] }
            ]
        }
    ];

    const serviceCategoryTabs = document.getElementById('service-category-tabs');
    const serviceContentDisplay = document.getElementById('service-content-display');
    const cartSummary = document.getElementById('cart-summary');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const emptyCartMessage = cartSummary.querySelector('.empty-cart-message');
    const placeOrderBtn = document.getElementById('place-order-btn');

    let cart = [];

    // --- Cart Functions ---

    // Load cart from localStorage
    const loadCart = () => {
        const storedCart = localStorage.getItem('servicesCart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    };

    // Save cart to localStorage
    const saveCart = () => {
        localStorage.setItem('servicesCart', JSON.stringify(cart));
    };

    // Render cart items in the summary
    const renderCart = () => {
        cartItemsList.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartSummary.classList.remove('active'); // Hide cart if empty
        } else {
            emptyCartMessage.style.display = 'none';
            cartSummary.classList.add('active'); // Show cart if not empty
            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${item.name} (x${item.quantity})</span>
                    <span>KES ${item.price.toLocaleString()}
                        <button class="remove-item" data-id="${item.id}" aria-label="Remove ${item.name} from cart">
                            <i class="fas fa-times"></i>
                        </button>
                    </span>
                `;
                cartItemsList.appendChild(listItem);
                total += item.price * item.quantity;
            });
        }
        cartTotalAmount.textContent = `KES ${total.toLocaleString()}`;
        updateAddToCartButtons(); // Update button states after rendering cart
    };

    // Add item to cart
    const addToCart = (id, name, price) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        saveCart();
        renderCart();
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCart();
    };

    // Update "Add to Cart" button states (enabled/disabled, text)
    const updateAddToCartButtons = () => {
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            const serviceId = button.dataset.id;
            const isInCart = cart.some(item => item.id === serviceId);

            if (isInCart) {
                button.classList.add('btn-secondary'); // Use secondary style for "Added"
                button.textContent = 'Added to Cart';
                button.disabled = true;
            } else {
                button.classList.remove('btn-secondary');
                button.textContent = 'Add to Cart';
                button.disabled = false;
            }
        });
    };

    // --- Dynamic Content Generation ---

    // Function to render service cards for a given category
    const renderServiceCards = (categoryItems) => {
        console.log('renderServiceCards called for category:', categoryItems[0]?.category || 'Unknown Category');
        console.log('Category Items received:', categoryItems); // Log the actual data
        serviceContentDisplay.innerHTML = ''; // Clear previous content
        console.log('serviceContentDisplay cleared.');

        const categoryContentDiv = document.createElement('div');
        categoryContentDiv.classList.add('package-category-content', 'active'); // Reusing package-category-content class

        const cardsGrid = document.createElement('div');
        cardsGrid.classList.add('package-cards-grid'); // Reusing package-cards-grid class
        // REMOVED: cardsGrid.setAttribute('data-aos', 'fade-up'); // Removed data-aos from dynamic content
        console.log('data-aos attribute removed from cardsGrid for debugging.');


        if (categoryItems && categoryItems.length > 0) { // Check if categoryItems is not empty
            categoryItems.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.classList.add('package-card'); // Reusing package-card class
                if (service.highlight) {
                    serviceCard.classList.add('highlighted');
                }

                let priceDisplay = `KES ${service.price.toLocaleString()}`;
                if (typeof service.price === 'string' && service.price.includes('-')) {
                    priceDisplay = `KES ${service.price}`; // Handle price ranges
                } else if (service.price === 'Varies') {
                    priceDisplay = "Price Varies";
                }

                serviceCard.innerHTML = `
                    ${service.highlight ? '<div class="most-popular-badge">Most Popular</div>' : ''}
                    <h4>${service.name}</h4>
                    <div class="price-range"><span>KES</span> ${priceDisplay}</div>
                    <ul class="services-list">
                        ${service.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary btn-add-to-cart" data-id="${service.id}" data-name="${service.name}" data-price="${service.price}">
                        Add to Cart
                    </button>
                `;
                cardsGrid.appendChild(serviceCard);
                // console.log('Appended service card:', service.name); // Too verbose, skip for now
            });
            console.log('All service cards created for category.');
        } else {
            console.log('No service items to render for this category.');
            // Optionally, display a message to the user if no services are found
            const noServicesMessage = document.createElement('p');
            noServicesMessage.classList.add('text-center', 'mt-4');
            noServicesMessage.style.color = 'var(--text-dark)'; // Ensure visibility on light background
            noServicesMessage.textContent = 'No services found for this category. Please check back later!';
            cardsGrid.appendChild(noServicesMessage);
        }

        categoryContentDiv.appendChild(cardsGrid);
        serviceContentDisplay.appendChild(categoryContentDiv);
        console.log('New category content div appended to serviceContentDisplay.');


        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const id = event.target.dataset.id;
                const name = event.target.dataset.name;
                const price = parseFloat(event.target.dataset.price); // Ensure price is a number
                if (!isNaN(price)) { // Only add if price is a valid number
                    addToCart(id, name, price);
                } else {
                    alert(`Cannot add "${name}" to cart. Price is not a valid number.`);
                }
            });
        });

        // Temporarily comment out AOS.refresh() to test if it's the cause of the rendering issue
        // AOS.refresh();
        console.log('AOS refresh skipped for debugging.');
    };

    // Function to initialize tabs and content
    const initServicesPage = () => {
        console.log('initServicesPage called.');
        serviceCategoryTabs.innerHTML = ''; // Clear existing tabs

        servicesData.forEach((category, index) => {
            const tabButton = document.createElement('button');
            tabButton.classList.add('package-category-tab'); // Reusing package-category-tab class
            tabButton.setAttribute('data-category', category.category.toLowerCase().replace(/\s/g, '-'));
            // REMOVED: tabButton.setAttribute('data-aos', 'fade-up'); // Removed data-aos from tab buttons
            tabButton.setAttribute('data-aos-delay', (index * 50) + 300); // Keep delay if useful for staggering appearance without AOS animation

            tabButton.innerHTML = `<i class="${category.icon}"></i> ${category.category}`;
            serviceCategoryTabs.appendChild(tabButton);

            tabButton.addEventListener('click', () => {
                console.log('Tab clicked:', category.category);
                // Remove 'active' from all tabs and content
                document.querySelectorAll('.package-category-tab').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.package-category-content').forEach(content => content.classList.remove('active'));

                // Add 'active' to clicked tab
                tabButton.classList.add('active');

                // Render content for the selected category
                renderServiceCards(category.items);
            });

            // Activate the first tab by default
            if (index === 0) {
                console.log('Activating first tab:', category.category);
                tabButton.click();
            }
        });
    };

    // --- Event Listeners ---

    // Remove item from cart listener (delegated to parent)
    cartItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item') || event.target.closest('.remove-item')) {
            const button = event.target.closest('.remove-item');
            const id = button.dataset.id;
            removeFromCart(id);
        }
    });

    // Place Order button functionality
    placeOrderBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add services before placing an order.');
            return;
        }

        let orderSummaryText = "Hello CANAX DESIGNS, I'd like to place an order for the following services:\n\n";
        let totalAmount = 0;
        cart.forEach(item => {
            orderSummaryText += `- ${item.name} (x${item.quantity}) - KES ${item.price.toLocaleString()}\n`;
            totalAmount += item.price * item.quantity;
        });
        orderSummaryText += `\nTotal: KES ${totalAmount.toLocaleString()}`;
        orderSummaryText += "\n\nThank you!";

        // WhatsApp number for CANAX DESIGNS
        const whatsappNumber = "2547515141395"; // Your WhatsApp number

        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(orderSummaryText);

        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Clear cart after placing order
        cart = [];
        saveCart();
        renderCart();

        // Optionally, show a brief confirmation message to the user
        // You might want to replace the alert with a custom modal for better UX
        alert('Redirecting to WhatsApp with your order details. Please send the message to confirm.');
    });

    // Initial load
    loadCart();
    renderCart(); // Render cart on page load
    initServicesPage(); // Initialize tabs and display first category's services
});
