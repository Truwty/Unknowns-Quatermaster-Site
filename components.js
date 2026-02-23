/**
 * Shared UI Components for Quartermaster Store
 * Royal Heritage Edition
 */

const Components = {
    config: {
        logo: 'images/LOGO.png',
        typingSpeed: 50,
        revealThreshold: 0.1,
        themes: {
            royal: {
                name: 'Royal Emerald',
                colors: {
                    '--primary-royal-blue': '#0C6E4E',
                    '--royal-blue-deep': '#047857',
                    '--royal-blue-glow': 'rgba(12, 110, 78, 0.5)',

                    '--primary-scarlet': '#10B981',
                    '--scarlet-bright': '#34D399',
                    '--scarlet-glow': 'rgba(16, 185, 129, 0.4)',

                    '--accent-gold': '#D4AF37',
                    '--accent-gold-bright': '#F5DEB3',
                    '--accent-gold-pale': '#FFFDD0',
                    '--gold-glow': 'rgba(212, 175, 55, 0.35)',
                    '--imperial-cream': '#FFFFF0',

                    '--bg-dark': '#06130c',
                    '--bg-surface': '#0c1a14',
                    '--text-main': '#f5f5f5',
                    '--text-muted': '#a8b3ad',
                    '--glass-bg': 'rgba(255, 255, 255, 0.03)',
                    '--glass-border': 'rgba(255, 255, 255, 0.08)',
                    '--glass-glow': 'rgba(212, 175, 55, 0.08)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #0C6E4E 0%, #047857 40%, #06130c 100%)'
                }
            },
            scarlet: {
                name: 'Imperial Scarlet',
                colors: {
                    '--primary-royal-blue': '#3a0000',
                    '--royal-blue-deep': '#1f0000',
                    '--royal-blue-glow': 'rgba(185, 28, 28, 0.35)',

                    '--primary-scarlet': '#ff1a1a',
                    '--scarlet-bright': '#ff4d4d',
                    '--scarlet-glow': 'rgba(255, 26, 26, 0.35)',

                    '--accent-gold': '#ffcc00',
                    '--accent-gold-bright': '#ffe680',
                    '--accent-gold-pale': '#fff2b3',
                    '--gold-glow': 'rgba(255, 204, 0, 0.25)',
                    '--imperial-cream': '#fffaf0',

                    '--bg-dark': '#080202',
                    '--bg-surface': '#120404',
                    '--text-main': '#fff7f7',
                    '--text-muted': '#d6c8c4',
                    '--glass-bg': 'rgba(255, 255, 255, 0.035)',
                    '--glass-border': 'rgba(255, 255, 255, 0.10)',
                    '--glass-glow': 'rgba(255, 204, 0, 0.07)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #3a0000 0%, #1f0000 42%, #080202 100%)'
                }
            },
            emerald: {
                name: 'Emerald Guard',
                colors: {
                    '--primary-royal-blue': '#003311',
                    '--royal-blue-deep': '#001a09',
                    '--royal-blue-glow': 'rgba(34, 197, 94, 0.25)',

                    '--primary-scarlet': '#00b36b',
                    '--scarlet-bright': '#22c55e',
                    '--scarlet-glow': 'rgba(34, 197, 94, 0.25)',

                    '--accent-gold': '#a7f3d0',
                    '--accent-gold-bright': '#d1fae5',
                    '--accent-gold-pale': '#ecfdf5',
                    '--gold-glow': 'rgba(167, 243, 208, 0.18)',
                    '--imperial-cream': '#f7fffb',

                    '--bg-dark': '#020804',
                    '--bg-surface': '#06130c',
                    '--text-main': '#effaf3',
                    '--text-muted': '#a7b8ad',
                    '--glass-bg': 'rgba(255, 255, 255, 0.028)',
                    '--glass-border': 'rgba(255, 255, 255, 0.085)',
                    '--glass-glow': 'rgba(34, 197, 94, 0.06)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #003311 0%, #001a09 42%, #020804 100%)'
                }
            },
            midnight: {
                name: 'Midnight Onyx',
                colors: {
                    '--primary-royal-blue': '#111111',
                    '--royal-blue-deep': '#000000',
                    '--royal-blue-glow': 'rgba(255, 255, 255, 0.08)',

                    '--primary-scarlet': '#2a2a2a',
                    '--scarlet-bright': '#5a5a5a',
                    '--scarlet-glow': 'rgba(255, 255, 255, 0.08)',

                    '--accent-gold': '#e5e7eb',
                    '--accent-gold-bright': '#ffffff',
                    '--accent-gold-pale': '#f9fafb',
                    '--gold-glow': 'rgba(255, 255, 255, 0.10)',
                    '--imperial-cream': '#ffffff',

                    '--bg-dark': '#000000',
                    '--bg-surface': '#0a0a0a',
                    '--text-main': '#f3f4f6',
                    '--text-muted': '#a1a1aa',
                    '--glass-bg': 'rgba(255, 255, 255, 0.02)',
                    '--glass-border': 'rgba(255, 255, 255, 0.07)',
                    '--glass-glow': 'rgba(255, 255, 255, 0.05)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #1a1a1a 0%, #0a0a0a 42%, #000000 100%)'
                }
            },
            ivory: {
                name: 'Ivory Daylight',
                colors: {
                    '--primary-royal-blue': '#1f3a8a',
                    '--royal-blue-deep': '#0b1020',
                    '--royal-blue-glow': 'rgba(31, 58, 138, 0.25)',

                    '--primary-scarlet': '#b91c1c',
                    '--scarlet-bright': '#ef4444',
                    '--scarlet-glow': 'rgba(185, 28, 28, 0.25)',

                    '--accent-gold': '#b45309',
                    '--accent-gold-bright': '#f59e0b',
                    '--accent-gold-pale': '#fde68a',
                    '--gold-glow': 'rgba(245, 158, 11, 0.22)',
                    '--imperial-cream': '#faf8f0',

                    '--bg-dark': '#f7f5ee',
                    '--bg-surface': '#ffffff',
                    '--text-main': '#0b1020',
                    '--text-muted': '#4b5563',
                    '--glass-bg': 'rgba(255, 255, 255, 0.65)',
                    '--glass-border': 'rgba(11, 16, 32, 0.10)',
                    '--glass-glow': 'rgba(245, 158, 11, 0.10)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(31, 58, 138, 0.12) 0%, rgba(245, 158, 11, 0.08) 35%, #f7f5ee 100%)'
                }
            },
            sapphire: {
                name: 'Sapphire Majesty',
                colors: {
                    '--primary-royal-blue': '#0f1419',
                    '--royal-blue-deep': '#0a0e12',
                    '--royal-blue-glow': 'rgba(59, 130, 246, 0.3)',

                    '--primary-scarlet': '#1e40af',
                    '--scarlet-bright': '#3b82f6',
                    '--scarlet-glow': 'rgba(59, 130, 246, 0.3)',

                    '--accent-gold': '#60a5fa',
                    '--accent-gold-bright': '#93c5fd',
                    '--accent-gold-pale': '#dbeafe',
                    '--gold-glow': 'rgba(147, 197, 253, 0.2)',
                    '--imperial-cream': '#f0f9ff',

                    '--bg-dark': '#0f172a',
                    '--bg-surface': '#1e293b',
                    '--text-main': '#f1f5f9',
                    '--text-muted': '#94a3b8',
                    '--glass-bg': 'rgba(255, 255, 255, 0.025)',
                    '--glass-border': 'rgba(255, 255, 255, 0.08)',
                    '--glass-glow': 'rgba(59, 130, 246, 0.08)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #1e40af 0%, #0f1419 40%, #0f172a 100%)'
                }
            },
            ruby: {
                name: 'Ruby Imperial',
                colors: {
                    '--primary-royal-blue': '#450a0a',
                    '--royal-blue-deep': '#2a0a0a',
                    '--royal-blue-glow': 'rgba(220, 38, 38, 0.3)',

                    '--primary-scarlet': '#dc2626',
                    '--scarlet-bright': '#ef4444',
                    '--scarlet-glow': 'rgba(239, 68, 68, 0.3)',

                    '--accent-gold': '#fca5a5',
                    '--accent-gold-bright': '#fecaca',
                    '--accent-gold-pale': '#fef2f2',
                    '--gold-glow': 'rgba(254, 202, 202, 0.2)',
                    '--imperial-cream': '#fff5f5',

                    '--bg-dark': '#1f0a0a',
                    '--bg-surface': '#2d0a0a',
                    '--text-main': '#fef2f2',
                    '--text-muted': '#fca5a5',
                    '--glass-bg': 'rgba(255, 255, 255, 0.03)',
                    '--glass-border': 'rgba(255, 255, 255, 0.08)',
                    '--glass-glow': 'rgba(239, 68, 68, 0.08)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #dc2626 0%, #450a0a 40%, #1f0a0a 100%)'
                }
            },
            gold: {
                name: 'Golden Sovereign',
                colors: {
                    '--primary-royal-blue': '#451a03',
                    '--royal-blue-deep': '#2a0f00',
                    '--royal-blue-glow': 'rgba(245, 158, 11, 0.3)',

                    '--primary-scarlet': '#d97706',
                    '--scarlet-bright': '#f59e0b',
                    '--scarlet-glow': 'rgba(245, 158, 11, 0.3)',

                    '--accent-gold': '#fbbf24',
                    '--accent-gold-bright': '#fcd34d',
                    '--accent-gold-pale': '#fef3c7',
                    '--gold-glow': 'rgba(252, 211, 77, 0.25)',
                    '--imperial-cream': '#fffbeb',

                    '--bg-dark': '#2d1b0a',
                    '--bg-surface': '#3f2c0a',
                    '--text-main': '#fef3c7',
                    '--text-muted': '#fbbf24',
                    '--glass-bg': 'rgba(255, 255, 255, 0.035)',
                    '--glass-border': 'rgba(255, 255, 255, 0.08)',
                    '--glass-glow': 'rgba(245, 158, 11, 0.08)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #d97706 0%, #451a03 40%, #2d1b0a 100%)'
                }
            },
            silver: {
                name: 'Silver Lunar',
                colors: {
                    '--primary-royal-blue': '#1f2937',
                    '--royal-blue-deep': '#111827',
                    '--royal-blue-glow': 'rgba(156, 163, 175, 0.25)',

                    '--primary-scarlet': '#6b7280',
                    '--scarlet-bright': '#9ca3af',
                    '--scarlet-glow': 'rgba(156, 163, 175, 0.25)',

                    '--accent-gold': '#d1d5db',
                    '--accent-gold-bright': '#e5e7eb',
                    '--accent-gold-pale': '#f9fafb',
                    '--gold-glow': 'rgba(229, 231, 235, 0.15)',
                    '--imperial-cream': '#ffffff',

                    '--bg-dark': '#0f172a',
                    '--bg-surface': '#1e293b',
                    '--text-main': '#f1f5f9',
                    '--text-muted': '#94a3b8',
                    '--glass-bg': 'rgba(255, 255, 255, 0.02)',
                    '--glass-border': 'rgba(255, 255, 255, 0.07)',
                    '--glass-glow': 'rgba(156, 163, 175, 0.05)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, #374151 0%, #1f2937 40%, #0f172a 100%)'
                }
            },
            platinum: {
                name: 'Platinum Elite',
                colors: {
                    '--primary-royal-blue': '#f8fafc',
                    '--royal-blue-deep': '#e2e8f0',
                    '--royal-blue-glow': 'rgba(148, 163, 184, 0.2)',

                    '--primary-scarlet': '#64748b',
                    '--scarlet-bright': '#94a3b8',
                    '--scarlet-glow': 'rgba(148, 163, 184, 0.2)',

                    '--accent-gold': '#cbd5e1',
                    '--accent-gold-bright': '#e2e8f0',
                    '--accent-gold-pale': '#f1f5f9',
                    '--gold-glow': 'rgba(226, 232, 240, 0.15)',
                    '--imperial-cream': '#ffffff',

                    '--bg-dark': '#f8fafc',
                    '--bg-surface': '#ffffff',
                    '--text-main': '#1e293b',
                    '--text-muted': '#64748b',
                    '--glass-bg': 'rgba(255, 255, 255, 0.8)',
                    '--glass-border': 'rgba(30, 41, 59, 0.1)',
                    '--glass-glow': 'rgba(148, 163, 184, 0.08)',

                    '--body-bg': 'radial-gradient(ellipse 120% 80% at 50% -10%, rgba(100, 116, 139, 0.1) 0%, rgba(203, 213, 225, 0.05) 35%, #f8fafc 100%)'
                }
            }
        }
    },

    setTheme(themeName) {
        const theme = this.config.themes[themeName];
        if (!theme) return;
        
        Object.entries(theme.colors).forEach(([prop, value]) => {
            document.documentElement.style.setProperty(prop, value);
        });
        
        localStorage.setItem('qm-theme', themeName);
        this.showNotification(`Theme switched to ${theme.name}`);
    },

    init() {
        this.showLoadingScreen();
        
        const savedTheme = localStorage.getItem('qm-theme') || 'royal';
        this.setTheme(savedTheme);
        
        this.renderNav();
        this.renderFooter();
        this.initScrollProgress();
        this.applyRevealAnimations();
        this.initTypingEffect();
        this.initCustomCursor();
        this.initSharedInteractions();
        this.initParallax();
        this.initBackToTop();
        this.initImageZoom();
        this.initCalculator();
        this.initCustomDropdowns();
        this.initSmoothScroll();
        this.initPageTransitions();
        
        window.addEventListener('load', () => {
            setTimeout(() => this.hideLoadingScreen(), 500);
        });
    },

    showLoadingScreen() {
        if (document.querySelector('.loading-screen')) return;
        
        const loader = document.createElement('div');
        loader.className = 'loading-screen';
        loader.innerHTML = `
            <div class="loading-logo">
                <img src="${this.config.logo}" alt="Loading">
            </div>
            <div class="loading-text">Loading Quartermaster</div>
            <div class="loading-bar"></div>
        `;
        document.body.prepend(loader);
    },

    hideLoadingScreen() {
        const loader = document.querySelector('.loading-screen');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 800);
        }
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    initPageTransitions() {
        document.querySelectorAll('a[href^="./"], a[href$=".html"]:not([target="_blank"])').forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.hostname !== window.location.hostname) return;
                
                e.preventDefault();
                const href = this.href;
                
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    },

    initCustomDropdowns() {
        document.querySelectorAll('.uniform-select').forEach(select => {
            const selected = select.querySelector('.selected-uniform');
            const options = select.querySelector('.uniform-options');
            
            selected.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = select.classList.contains('active');
                
                // Close all other dropdowns
                document.querySelectorAll('.uniform-select').forEach(s => s.classList.remove('active'));
                
                if (!isOpen) select.classList.add('active');
            });

            select.querySelectorAll('.uniform-option').forEach(option => {
                option.addEventListener('click', () => {
                    selected.textContent = option.textContent;
                    select.classList.remove('active');
                    if (this.calculatePrice) this.calculatePrice();
                });
            });
        });

        // Close dropdowns on click outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.uniform-select').forEach(s => s.classList.remove('active'));
        });
    },

    initCalculator() {
        if (document.getElementById('pricing-modal')) return;
        
        const modal = document.createElement('div');
        modal.id = 'pricing-modal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content calculator-modal">
                <button class="modal-close" onclick="Components.closeCalculator()">&times;</button>
                <div class="modal-header">
                    <div class="calc-icon">⚖️</div>
                    <h2>Pricing Calculator</h2>
                    <div class="section-divider" style="margin: 20px auto;"></div>
                    <p class="calc-subtitle">Official Quartermaster Procurement Estimates</p>
                </div>
                <div class="calculator-body">
                    <div class="calc-section">
                        <h3 class="calc-section-title">Base Uniform Fee</h3>
                        <div class="calc-base-price">
                            <div class="price-badge">
                                <span class="price-icon">💰</span>
                                <span class="price-amount">20</span>
                                <span class="price-currency">Robux</span>
                            </div>
                        </div>
                        <input type="hidden" id="calc-base" value="20">
                    </div>
                    
                    <div class="calc-section">
                        <h3 class="calc-section-title">Included at No Extra Cost</h3>
                        <div class="calc-included-grid">
                            <div class="included-item">
                                <span class="item-icon">🎖️</span>
                                <span class="item-name">Medals</span>
                            </div>
                            <div class="included-item">
                                <span class="item-icon">🎗️</span>
                                <span class="item-name">Formal Cords</span>
                            </div>
                            <div class="included-item">
                                <span class="item-icon">📌</span>
                                <span class="item-name">Pins</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">Additional Accessories</h3>
                        <div class="calc-checkboxes">
                            <label class="calc-checkbox-label">
                                <input type="checkbox" value="5" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Gloves</span>
                                    <span class="item-price">+5 R$</span>
                                </span>
                            </label>
                            <label class="calc-checkbox-label">
                                <input type="checkbox" value="5" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Tattoos</span>
                                    <span class="item-price">+5 R$</span>
                                </span>
                            </label>
                            <label class="calc-checkbox-label">
                                <input type="checkbox" value="5" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Watches</span>
                                    <span class="item-price">+5 R$</span>
                                </span>
                            </label>
                            <label class="calc-checkbox-label">
                                <input type="checkbox" value="5" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Armbands</span>
                                    <span class="item-price">+5 R$</span>
                                </span>
                            </label>
                            <label class="calc-checkbox-label">
                                <input type="checkbox" value="5" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Sashes</span>
                                    <span class="item-price">+5 R$</span>
                                </span>
                            </label>
                            <label class="calc-checkbox-label">
                                <input type="checkbox" value="5" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Short Sleeves</span>
                                    <span class="item-price">+5 R$</span>
                                </span>
                            </label>
                            <label class="calc-checkbox-label full-width">
                                <input type="checkbox" value="10" onchange="Components.calculatePrice()">
                                <span class="checkbox-custom"></span>
                                <span class="checkbox-text">
                                    <span class="item-name">Nametags</span>
                                    <span class="item-price">+10 R$</span>
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="calc-result-section">
                        <div class="calc-breakdown">
                            <div class="breakdown-row">
                                <span>Base Uniform</span>
                                <span id="calc-base-display">20 R$</span>
                            </div>
                            <div class="breakdown-row">
                                <span>Additional Items</span>
                                <span id="calc-extras-display">0 R$</span>
                            </div>
                        </div>
                        <div class="calc-total-bar"></div>
                        <div class="calc-result">
                            <div class="result-label">Total Estimate</div>
                            <div class="result-value" id="calc-total">20 Robux</div>
                        </div>
                    </div>
                    
                    <div class="calc-actions">
                        <button class="btn-primary calc-copy-btn" onclick="Components.copyCalculatorQuote()">
                            <span class="btn-icon">📋</span>
                            <span>Copy Quote</span>
                        </button>
                        <button class="btn-secondary calc-reset-btn" onclick="Components.resetCalculator()">
                            <span class="btn-icon">🔄</span>
                            <span>Reset</span>
                        </button>
                    </div>
                    <p class="calc-disclaimer">* Final price may vary based on specific regimental requirements and customizations.</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeCalculator();
        });
    },

    openCalculator() {
        const modal = document.getElementById('pricing-modal');
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
            this.calculatePrice();
        }
    },

    closeCalculator() {
        const modal = document.getElementById('pricing-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.style.display = 'none', 400);
        }
    },

    calculatePrice() {
        const base = parseInt(document.getElementById('calc-base')?.value) || 20;
        const checkboxes = document.querySelectorAll('.calc-checkboxes input[type="checkbox"]:checked:not([disabled])');
        let extra = 0;
        checkboxes.forEach(cb => {
            const value = parseInt(cb.value) || 0;
            extra += value;
        });
        
        const total = base + extra;
        
        const totalEl = document.getElementById('calc-total');
        const extrasEl = document.getElementById('calc-extras-display');
        const baseEl = document.getElementById('calc-base-display');
        
        if (totalEl) {
            totalEl.textContent = `${total} Robux`;
            totalEl.style.animation = 'none';
            setTimeout(() => {
                totalEl.style.animation = 'priceUpdate 0.5s ease';
            }, 10);
        }
        
        if (extrasEl) {
            extrasEl.textContent = `${extra} R$`;
        }
        
        if (baseEl) {
            baseEl.textContent = `${base} R$`;
        }
    },

    resetCalculator() {
        const checkboxes = document.querySelectorAll('.calc-checkboxes input[type="checkbox"]:not([disabled])');
        checkboxes.forEach(cb => {
            cb.checked = false;
        });
        this.calculatePrice();
        this.showToast('Calculator reset', '🔄');
    },

    copyCalculatorQuote() {
        const total = document.getElementById('calc-total')?.textContent || '20 Robux';
        const base = document.getElementById('calc-base')?.value || '20';
        const checkboxes = document.querySelectorAll('.calc-checkboxes input[type="checkbox"]:checked:not([disabled])');
        
        let items = [];
        checkboxes.forEach(cb => {
            const label = cb.closest('.calc-checkbox-label');
            const itemName = label?.querySelector('.item-name')?.textContent || '';
            const itemPrice = cb.value;
            if (itemName) {
                items.push(`  • ${itemName}: +${itemPrice} R$`);
            }
        });
        
        let quote = `═══════════════════════════════\n`;
        quote += `   QUARTERMASTER PRICE QUOTE\n`;
        quote += `═══════════════════════════════\n\n`;
        quote += `Base Uniform Fee: ${base} Robux\n`;
        
        if (items.length > 0) {
            quote += `\nAdditional Items:\n`;
            quote += items.join('\n') + '\n';
        }
        
        quote += `\n───────────────────────────────\n`;
        quote += `TOTAL ESTIMATE: ${total}\n`;
        quote += `═══════════════════════════════\n\n`;
        quote += `* Final price may vary based on specific regimental requirements.`;
        
        this.copyToClipboard(quote);
    },



    initScrollProgress() {
        const progress = document.createElement('div');
        progress.className = 'scroll-progress';
        document.body.appendChild(progress);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progress.style.width = scrolled + "%";
        });
    },

    initImageZoom() {
        let overlay = document.querySelector('.zoom-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'zoom-overlay';
            overlay.innerHTML = '<img src="" alt="Zoomed Image">';
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 400);
            });
        }

        const zoomedImg = overlay.querySelector('img');

        document.addEventListener('click', (e) => {
            const img = e.target.closest('.reg-card img');
            if (img) {
                if (img.src.includes('placeholder.png')) return;
                zoomedImg.src = img.src;
                overlay.style.display = 'flex';
                overlay.offsetHeight;
                overlay.classList.add('active');
            }
        });
    },

    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-banner');
            if (hero) {
                hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
            }
        });
    },

    initBackToTop() {
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
            this.showNotification('Returned to top', 'info');
        });
    },

    initCustomCursor() {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = document.createElement('div');
        const follower = document.createElement('div');
        cursor.className = 'custom-cursor';
        follower.className = 'custom-cursor-outline';
        document.body.appendChild(cursor);
        document.body.appendChild(follower);

        document.body.style.cursor = 'none';

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Click ripple effect
        document.addEventListener('mousedown', () => {
            cursor.classList.add('clicking');
            follower.classList.add('clicking');
        });
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('clicking');
            follower.classList.remove('clicking');
        });

        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.25;
            cursorY += (mouseY - cursorY) * 0.25;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

            requestAnimationFrame(animate);
        };
        animate();

        const updateHoverState = (isHover) => {
            if (isHover) {
                follower.classList.add('hovering');
            } else {
                follower.classList.remove('hovering');
            }
        };

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .glass-card, input, select, textarea, .reg-card, .showcase-card')) {
                updateHoverState(true);
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .glass-card, input, select, textarea, .reg-card, .showcase-card')) {
                updateHoverState(false);
            }
        });
    },

    initTypingEffect() {
        const title = document.getElementById('typing-title');
        if (!title) return;

        const text = title.getAttribute('data-text') || "Welcome to Unknown's Quartermaster";
        let i = 0;
        title.textContent = ""; 
        
        const type = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(type, this.config.typingSpeed);
            }
        };

        setTimeout(type, 500);
    },

    initSharedInteractions() {
        this.initLazyLoading();
        this.initKeyboardShortcuts();
        this.initPerformanceMonitoring();
        
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                e.target.src = this.config.logo;
                e.target.classList.add('error-fallback');
            }
        }, true);
    },

    initLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy-img');
            imageObserver.observe(img);
        });

        document.querySelectorAll('img[loading="lazy"]:not([data-src])').forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            }, { once: true });
            
            if (img.complete) {
                img.classList.add('loaded');
            }
        });
    },

    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()) {
                    case 'k':
                        e.preventDefault();
                        this.openCalculator();
                        break;
                    case '/':
                        e.preventDefault();
                        const search = document.querySelector('input[type="search"], input[type="text"]');
                        if (search) search.focus();
                        break;
                }
            }
            
            if (e.key === 'Escape') {
                this.closeCalculator();
                const modal = document.querySelector('.zoom-overlay.active');
                if (modal) modal.click();
            }
        });
    },

    initPerformanceMonitoring() {
        if ('performance' in window && 'PerformanceObserver' in window) {
            try {
                const perfObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 100) {
                            console.warn(`Slow interaction detected: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
                        }
                    }
                });
                perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
            } catch (e) {
                console.log('Performance monitoring not available');
            }
        }
    },

    showNotification(message, type = 'success') {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const icons = {
            success: '✓',
            error: '✗',
            info: 'ℹ',
            warning: '⚠'
        };

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.success}</div>
            <div class="toast-message">${message}</div>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('hiding');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    },

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Specification copied to HQ clipboard!');
        }).catch(() => {
            this.showNotification('Failed to copy to clipboard', 'error');
        });
    },

    showToast(message, icon = '✓') {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('hiding');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    },

    renderNav() {
        let navContainer = document.querySelector('header.main-nav-container');
        if (!navContainer) {
            navContainer = document.createElement('header');
            navContainer.className = 'main-nav-container';
            // Ensure navigation is the very first element in the body
            if (document.body.firstChild) {
                document.body.insertBefore(navContainer, document.body.firstChild);
            } else {
                document.body.appendChild(navContainer);
            }
        }
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        navContainer.innerHTML = `
            <nav class="main-nav">
                <a href="index.html" class="nav-brand">
                    <img src="${this.config.logo}" alt="Logo">
                    <span>QM Store</span>
                </a>
                
                <div class="nav-links">
                    <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Home</a>
                    <a href="uniforms.html" class="${currentPath === 'uniforms.html' ? 'active' : ''}">Uniforms</a>
                    <div class="nav-dropdown">
                        <a href="uniform-regulations.html" class="${currentPath.includes('regulations') || ['dress-orders.html'].includes(currentPath) ? 'active' : ''}">
                            Regulations
                            <span class="dropdown-chevron"></span>
                        </a>
                        <div class="dropdown-content">
                            <a href="uniform-regulations.html">Overview</a>
                            <a href="faces-regulations.html">Face Regulations</a>
                            <a href="hairs-regulations.html">Hair Regulations</a>
                            <a href="ranks-regulations.html">Rank Insignias</a>
                            <a href="dress-orders.html">Orders of Dress</a>
                            <a href="non-ceremonial-regulations.html">Non-Ceremonial</a>
                        </div>
                    </div>
                    <a href="awards.html" class="${currentPath === 'awards.html' ? 'active' : ''}">Awards</a>
                    <a href="recipients.html" class="${currentPath === 'recipients.html' ? 'active' : ''}">Recipients</a>
                    
                    <div class="nav-dropdown">
                        <a href="#" onclick="return false;">
                            Theme
                            <span class="dropdown-chevron"></span>
                        </a>
                        <div class="dropdown-content theme-selector">
                            ${Object.entries(this.config.themes).map(([key, theme]) => `
                                <a href="#" onclick="Components.setTheme('${key}'); return false;">${theme.name}</a>
                            `).join('')}
                        </div>
                    </div>

                    <a href="#" onclick="Components.openCalculator(); return false;" class="nav-calc-btn">
                        <span class="calc-icon">⚖️</span>
                        Pricing Calculator
                    </a>
                </div>
                
                <button class="nav-toggle" aria-label="Toggle navigation">
                    <span class="hamburger"></span>
                </button>
            </nav>
        `;



        // Toggle mobile menu
        const toggle = navContainer.querySelector('.nav-toggle');
        const links = navContainer.querySelector('.nav-links');
        
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Dropdown interaction fix for mobile and touch
        navContainer.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            const trigger = dropdown.querySelector('a');
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });
    },



    renderFooter() {
        let footerContainer = document.querySelector('.footer-container');
        if (!footerContainer) {
            footerContainer = document.createElement('div');
            footerContainer.className = 'footer-container';
            document.body.appendChild(footerContainer);
        }

        footerContainer.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-profile">
                        <div class="profile-card">
                            <img src="${this.config.logo}" alt="Quartermaster" class="profile-img">
                            <div class="profile-info">
                                <div class="profile-name">Quartermaster</div>
                                <div class="profile-handle">Official System</div>
                                <div class="status-badge" style="margin-bottom: 0; margin-top: 10px; padding: 4px 10px; font-size: 0.65rem;">
                                    <span class="status-dot"></span>
                                    Operational
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-info">
                        <h4>Quartermaster Store</h4>
                        <p>The premier destination for British Army elite uniforms and equipment. Managed by the Unknown's Quartermaster Corps.</p>
                        <p class="copyright" style="margin-top: 20px; font-size: 0.8rem; color: var(--text-muted);">
                            © ${new Date().getFullYear()} Quartermaster Store. Approved for use by TruSnooze.
                        </p>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-link-group">
                            <h4>Navigation</h4>
                            <a href="index.html">Home</a>
                            <a href="uniforms.html">Uniforms</a>
                            <a href="uniform-regulations.html">Regulations</a>
                            <a href="awards.html">Awards</a>
                        </div>
                        <div class="footer-link-group">
                            <h4>Resources</h4>
                            <a href="commission.html">Pricing</a>
                            <a href="https://www.roblox.com/users/8310005469/profile?friendshipSourceType=PlayerSearch" target="_blank">HQ Profile</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    applyRevealAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: this.config.revealThreshold });

        document.querySelectorAll('.glass-card, section, .page-header, .showcase-card, .stat-box, .medal-card').forEach((el) => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    },

    // Global Search Filter Utility
    filterElements(query, selector) {
        const elements = document.querySelectorAll(selector);
        const lowQuery = query.toLowerCase();
        elements.forEach(el => {
            const text = el.textContent.toLowerCase();
            el.style.display = text.includes(lowQuery) ? '' : 'none';
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Components.init();
    

});
