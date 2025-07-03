document.addEventListener('DOMContentLoaded', () => {
    console.log('packages.js loaded and executing!'); // Debugging line

    // Data extracted from "Clients and their packages.docx" and placeholders for 16 categories
    const packagesData = [
        {
            category: "Businesses & Brands",
            icon: "fas fa-building",
            items: [
                {
                    id: "biz-basic",
                    name: "Basic Package",
                    price: 5000, // Using lower end of range
                    features: [
                        "Logo & business card design",
                        "Promotional poster",
                        "Social media optimization (kit)"
                    ]
                },
                {
                    id: "biz-standard",
                    name: "Standard Package",
                    price: 20000, // Using lower end of range
                    features: [
                        "Logo & business card design",
                        "Promotional poster",
                        "Social media optimization (kit)",
                        "Promotional video",
                        "Website kit (logo, item photography)",
                        "1-week social media marketing"
                    ],
                    highlight: true // Mark as "Most Popular"
                },
                {
                    id: "biz-premium",
                    name: "Premium Package",
                    price: 60000, // Using lower end of range
                    features: [
                        "Logo & business card design",
                        "Promotional poster",
                        "Social media optimization (kit)",
                        "Promotional video",
                        "Website kit (logo, item photography)",
                        "1-week social media marketing",
                        "Full website creation & optimization",
                        "1 trailer (About Us)",
                        "2 business promo videos",
                        "1-month Social media marketing"
                    ]
                }
            ]
        },
        {
            category: "Event Organizers & Planners",
            icon: "fas fa-calendar-alt",
            items: [
                {
                    id: "event-basic",
                    name: "Basic Package",
                    price: 6000, // Using lower end of range
                    features: [
                        "Event logo design (if needed)",
                        "2 event posters",
                        "1 digital invitation card",
                        "1 promotional video (30 sec)",
                        "Social media marketing"
                    ]
                },
                {
                    id: "event-standard",
                    name: "Standard Package",
                    price: 30000, // Using lower end of range
                    features: [
                        "Event logo design (if needed)",
                        "3 event posters",
                        "2 digital invitation cards",
                        "1 promotional video (30-45 sec)",
                        "Web page design for sign-in",
                        "Social media marketing"
                    ]
                },
                {
                    id: "event-premium",
                    name: "Premium Package",
                    price: 50000, // Using lower end of range
                    features: [
                        "Unlimited posters & flyers",
                        "2 event trailers (90 sec)",
                        "Full website creation & optimization",
                        "Live streaming",
                        "Professional photography"
                    ]
                }
            ]
        },
        {
            category: "Travel & Tourism",
            icon: "fas fa-plane",
            items: [
                {
                    id: "travel-basic",
                    name: "Basic Package",
                    price: 40000,
                    features: [
                        "Logo design",
                        "2 destination/event posters",
                        "1 digital travel brochure (PDF)",
                        "1 short promotional video (30 sec)",
                        "Social media marketing"
                    ]
                },
                {
                    id: "travel-standard",
                    name: "Standard Package",
                    price: 50000,
                    features: [
                        "Branding kit",
                        "3 travel/event posters",
                        "1 digital travel brochure (PDF)",
                        "1 promotional video (45 sec)",
                        "Website landing page",
                        "Social media marketing"
                    ]
                },
                {
                    id: "travel-premium",
                    name: "Premium Package",
                    price: 90000,
                    features: [
                        "Unlimited posters & flyers",
                        "2 promotional videos (60 sec)",
                        "1 travel documentary (2-5 min)",
                        "Full website creation",
                        "Social media marketing"
                    ]
                }
            ]
        },
        {
            category: "Automotive & Transport",
            icon: "fas fa-car",
            items: [
                {
                    id: "auto-basic",
                    name: "Basic Package",
                    price: 50000, // Using lower end of range
                    features: [
                        "Logo design",
                        "2 vehicle promotion posters",
                        "1 service brochure (PDF)",
                        "1 short promotional video (30 sec)",
                        "5 days’ Social media marketing"
                    ]
                },
                {
                    id: "auto-standard",
                    name: "Standard Package",
                    price: 60000, // Using lower end of range
                    features: [
                        "Branding kit",
                        "3 promotional posters",
                        "1 service brochure (PDF)",
                        "1 promotional video (45 sec)",
                        "Website landing page",
                        "2 weeks’ Social media marketing"
                    ]
                },
                {
                    id: "auto-premium",
                    name: "Premium Package",
                    price: 120000, // Using lower end of range
                    features: [
                        "Unlimited posters & flyers",
                        "5 promotional videos (60 sec)",
                        "1 automotive showcase/documentary (2-5 min)",
                        "Full website creation",
                        "1-month Social media marketing",
                        "Live stream services"
                    ]
                }
            ]
        },
        {
            category: "Live Stream Services",
            icon: "fas fa-video",
            items: [
                {
                    id: "live-basic",
                    name: "Basic Package",
                    price: 20000,
                    features: [
                        "2 camera setup",
                        "One personnel",
                        "Basic streaming platform integration"
                    ]
                },
                {
                    id: "live-standard",
                    name: "Standard Package",
                    price: 40000,
                    features: [
                        "3-4 camera setup",
                        "Two personnel",
                        "Custom graphics overlay",
                        "Advanced streaming platform integration"
                    ]
                },
                {
                    id: "live-premium",
                    name: "Premium Package",
                    price: 80000,
                    features: [
                        "Multi-camera setup",
                        "Dedicated production team",
                        "Interactive elements",
                        "High-definition streaming",
                        "Post-event editing"
                    ]
                }
            ]
        },
        // Placeholder categories to reach 16 clients (with generic packages)
        {
            category: "Real Estate",
            icon: "fas fa-home",
            items: [
                {
                    id: "real-estate-custom",
                    name: "Custom Real Estate Package",
                    price: "Quote",
                    features: [
                        "Property photography & videography",
                        "Virtual tours",
                        "Digital brochures",
                        "Social media campaigns"
                    ]
                }
            ]
        },
        {
            category: "Healthcare & Wellness",
            icon: "fas fa-heartbeat",
            items: [
                {
                    id: "healthcare-custom",
                    name: "Custom Healthcare Package",
                    price: "Quote",
                    features: [
                        "Clinic branding",
                        "Patient education videos",
                        "Digital marketing materials",
                        "Website design"
                    ]
                }
            ]
        },
        {
            category: "Education & E-Learning",
            icon: "fas fa-graduation-cap",
            items: [
                {
                    id: "education-custom",
                    name: "Custom Education Package",
                    price: "Quote",
                    features: [
                        "Course material design",
                        "Explainer videos",
                        "Online platform branding",
                        "Promotional content"
                    ]
                }
            ]
        },
        {
            category: "Food & Beverage",
            icon: "fas fa-utensils",
            items: [
                {
                    id: "food-beverage-custom",
                    name: "Custom F&B Package",
                    price: "Quote",
                    features: [
                        "Menu design",
                        "Food photography & videography",
                        "Restaurant branding",
                        "Social media content"
                    ]
                }
            ]
        },
        {
            category: "Fashion & Apparel",
            icon: "fas fa-tshirt",
            items: [
                {
                    id: "fashion-custom",
                    name: "Custom Fashion Package",
                    price: "Quote",
                    features: [
                        "Lookbook design",
                        "Fashion photography & videography",
                        "E-commerce visuals",
                        "Brand storytelling"
                    ]
                }
            ]
        },
        {
            category: "Technology & Software",
            icon: "fas fa-laptop-code",
            items: [
                {
                    id: "tech-custom",
                    name: "Custom Tech Package",
                    price: "Quote",
                    features: [
                        "UI/UX design visuals",
                        "Software demo videos",
                        "Infographics",
                        "Product launch campaigns"
                    ]
                }
            ]
        },
        {
            category: "Fitness & Wellness",
            icon: "fas fa-dumbbell",
            items: [
                {
                    id: "fitness-custom",
                    name: "Custom Fitness Package",
                    price: "Quote",
                    features: [
                        "Gym branding",
                        "Workout videos",
                        "Nutritional guides design",
                        "Social media engagement"
                    ]
                }
            ]
        },
        {
            category: "Arts & Entertainment",
            icon: "fas fa-palette",
            items: [
                {
                    id: "arts-custom",
                    name: "Custom Arts Package",
                    price: "Quote",
                    features: [
                        "Album art design",
                        "Music videos",
                        "Event promotion",
                        "Artist portfolio visuals"
                    ]
                }
            ]
        },
        {
            category: "Non-Profit & Community",
            icon: "fas fa-hand-holding-heart",
            items: [
                {
                    id: "non-profit-custom",
                    name: "Custom Non-Profit Package",
                    price: "Quote",
                    features: [
                        "Campaign visuals",
                        "Impact story videos",
                        "Fundraising materials",
                        "Volunteer recruitment assets"
                    ]
                }
            ]
        },
        {
            category: "E-commerce & Retail",
            icon: "fas fa-store",
            items: [
                {
                    id: "ecommerce-custom",
                    name: "Custom E-commerce Package",
                    price: "Quote",
                    features: [
                        "Product photography",
                        "Online store banners",
                        "Promotional videos",
                        "Social media ads"
                    ]
                }
            ]
        },
        {
            category: "Personal Branding",
            icon: "fas fa-user-tie",
            items: [
                {
                    id: "personal-branding-custom",
                    name: "Custom Personal Branding Package",
                    price: "Quote",
                    features: [
                        "Personal logo design",
                        "Professional headshots",
                        "Resume/portfolio design",
                        "Social media presence optimization"
                    ]
                }
            ]
        }
    ];

    const packageCategoryTabs = document.getElementById('package-category-tabs');
    const packageContentDisplay = document.getElementById('package-content-display');
    const cartSummary = document.getElementById('cart-summary');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const emptyCartMessage = cartSummary.querySelector('.empty-cart-message');
    const placeOrderBtn = document.getElementById('place-order-btn');

    let cart = []; // This cart is specific to packages

    // --- Cart Functions ---

    // Load cart from localStorage using a unique key for packages
    const loadCart = () => {
        const storedCart = localStorage.getItem('packagesCart'); // Unique key
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    };

    // Save cart to localStorage using a unique key for packages
    const saveCart = () => {
        localStorage.setItem('packagesCart', JSON.stringify(cart)); // Unique key
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
        document.querySelectorAll('.btn-select-package').forEach(button => {
            const packageId = button.dataset.id;
            const isInCart = cart.some(item => item.id === packageId);

            if (isInCart) {
                button.classList.add('btn-secondary'); // Use secondary style for "Added"
                button.textContent = 'Added to Cart';
                button.disabled = true;
            } else {
                button.classList.remove('btn-secondary');
                button.textContent = 'Select Package';
                button.disabled = false;
            }
        });
    };

    // --- Dynamic Content Generation ---

    // Function to render package cards for a given category
    const renderPackageCards = (categoryItems) => {
        console.log('renderPackageCards called for category:', categoryItems[0]?.category || 'Unknown Category');
        console.log('Category Items received:', categoryItems); // Log the actual data
        packageContentDisplay.innerHTML = ''; // Clear previous content
        console.log('packageContentDisplay cleared.');

        const categoryContentDiv = document.createElement('div');
        categoryContentDiv.classList.add('package-category-content', 'active');

        const cardsGrid = document.createElement('div');
        cardsGrid.classList.add('package-cards-grid');
        // REMOVED: cardsGrid.setAttribute('data-aos', 'fade-up'); // Temporarily remove data-aos attribute
        console.log('data-aos attribute removed from cardsGrid for debugging.');


        if (categoryItems && categoryItems.length > 0) { // Check if categoryItems is not empty
            categoryItems.forEach(pkg => {
                const packageCard = document.createElement('div');
                packageCard.classList.add('package-card');
                // REMOVED: if (pkg.highlight) { packageCard.classList.add('highlighted'); } // Keep highlight class if needed for styling, but not for AOS
                // If 'highlighted' class is purely for visual styling (e.g., border color), keep it.
                // If it's intended to trigger an AOS animation, then remove its 'data-aos' if it had one.

                let priceDisplay = `KES ${pkg.price.toLocaleString()}`;
                if (typeof pkg.price === 'string' && pkg.price.includes('-')) {
                    priceDisplay = `KES ${pkg.price}`; // Handle price ranges
                } else if (pkg.price === 'Quote') {
                    priceDisplay = "Get a Quote";
                }

                packageCard.innerHTML = `
                    ${pkg.highlight ? '<div class="most-popular-badge">Most Popular</div>' : ''}
                    <h4>${pkg.name}</h4>
                    <div class="price-range"><span>KES</span> ${priceDisplay}</div>
                    <ul class="services-list">
                        ${pkg.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary btn-select-package" data-id="${pkg.id}" data-name="${pkg.name}" data-price="${pkg.price}">
                        ${pkg.price === 'Quote' ? 'Request Quote' : 'Select Package'}
                    </button>
                `;
                cardsGrid.appendChild(packageCard);
                // console.log('Appended package card:', pkg.name); // Too verbose, skip for now
            });
            console.log('All package cards created for category.');
        } else {
            console.log('No package items to render for this category.');
            // Optionally, display a message to the user if no packages are found
            const noPackagesMessage = document.createElement('p');
            noPackagesMessage.classList.add('text-center', 'mt-4');
            noPackagesMessage.style.color = 'var(--text-dark)'; // Ensure visibility on light background
            noPackagesMessage.textContent = 'No packages found for this category. Please check back later!';
            cardsGrid.appendChild(noPackagesMessage);
        }


        categoryContentDiv.appendChild(cardsGrid);
        packageContentDisplay.appendChild(categoryContentDiv);
        console.log('New category content div appended to packageContentDisplay.');


        // Add event listeners to "Select Package" buttons
        document.querySelectorAll('.btn-select-package').forEach(button => {
            button.addEventListener('click', (event) => {
                const id = event.target.dataset.id;
                const name = event.target.dataset.name;
                const price = event.target.dataset.price; // Get price as string to check for "Quote"

                // WhatsApp number for CANAX DESIGNS
                const whatsappNumber = "2547515141395";

                if (price === 'Quote') {
                    const quoteMessage = `Hello CANAX DESIGNS, I'd like to request a quote for the "${name}" package. Could you please provide more details?`;
                    const encodedQuoteMessage = encodeURIComponent(quoteMessage);
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedQuoteMessage}`;
                    window.open(whatsappUrl, '_blank');
                    alert(`Redirecting to WhatsApp to request a quote for "${name}". Please send the message.`);
                } else {
                    const numericPrice = parseFloat(price);
                    if (!isNaN(numericPrice)) { // Only add if price is a valid number
                        addToCart(id, name, numericPrice);
                    } else {
                        // Fallback for unexpected price format, though 'Quote' is handled above
                        alert(`Cannot add "${name}" to cart. Price format is unrecognized.`);
                    }
                }
            });
        });

        // Temporarily comment out AOS.refresh() to test if it's the cause of the rendering issue
        // AOS.refresh();
        console.log('AOS refresh skipped for debugging.');
    };

    // Function to initialize tabs and content
    const initPackagesPage = () => {
        console.log('initPackagesPage called.');
        packageCategoryTabs.innerHTML = ''; // Clear existing tabs

        packagesData.forEach((category, index) => {
            const tabButton = document.createElement('button');
            tabButton.classList.add('package-category-tab');
            tabButton.setAttribute('data-category', category.category.toLowerCase().replace(/\s/g, '-'));
            // REMOVED: tabButton.setAttribute('data-aos', 'fade-up'); // Temporarily remove data-aos attribute
            tabButton.setAttribute('data-aos-delay', (index * 50) + 300); // Keep delay if useful for staggering appearance without AOS animation

            tabButton.innerHTML = `<i class="${category.icon}"></i> ${category.category}`;
            packageCategoryTabs.appendChild(tabButton);

            tabButton.addEventListener('click', () => {
                console.log('Tab clicked:', category.category);
                // Remove 'active' from all tabs and content
                document.querySelectorAll('.package-category-tab').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.package-category-content').forEach(content => content.classList.remove('active'));

                // Add 'active' to clicked tab
                tabButton.classList.add('active');

                // Render content for the selected category
                renderPackageCards(category.items);
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
            alert('Your package cart is empty. Please add packages before placing an order.');
            return;
        }

        let orderSummaryText = "Hello CANAX DESIGNS, I'd like to place an order for the following packages:\n\n";
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
        alert('Redirecting to WhatsApp with your package order details. Please send the message to confirm.');
    });

    // Initial load
    loadCart();
    renderCart(); // Render cart on page load
    initPackagesPage(); // Initialize tabs and display first category's packages
});
