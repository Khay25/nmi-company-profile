// Data Konfigurasi Konten Setiap Produk
const productData = {
    poct: {
        title: "Point-of-Care Testing",
        subtitle: "PROVIDE LAB-QUALITY RESULTS AT ANYTIME, ANYWHERE",
        desc: "Based on the solid research foundation, EDAN delivers high quality and revolutionary products worldwide, and becomes a leader in POCT area gradually.",
        image: "../img/POCT-1500-Product2.jpg",
        gradient: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)",
        activeColorClass: "bg-info",
        tabs: [
            { name: "Blood Gas", link: "#blood-gas" },
            { name: "Blood Sampler", link: "#blood-sampler" }
        ]
    },
    ivd: {
        title: "In-Vitro Diagnostics",
        subtitle: "EMPOWERING YOUR LAB WITH SIMPLICITY",
        desc: "With accumulated experience and collaboration of strong partner, EDAN In-Vitro Diagnostics is aiming to provide a total solution for laboratory.",
        image: "../img/IVD-H90S&H99S-Product-Putih.jpg",
        gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
        activeColorClass: "bg-warning",
        tabs: [
            { name: "5-Part Hematology", link: "#5-part" },
            { name: "3-Part Hematology", link: "#3-part" },
            { name: "Reagents", link: "#reagents" }
        ]
    },
    ultrasound: {
        title: "Ultrasound Imaging",
        subtitle: "SEE ULTRASOUND IN A WHOLE NEW LIGHT",
        desc: "EDAN Ultrasound empowers clinicians with intelligent, high-value imaging solutions—combining cutting-edge intelligence, exceptional image clarity, and user-centric innovation.",
        image: "../img/USG-AcclarixLX3-Product-Putih.jpg",
        gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
        activeColorClass: "bg-primary",
        tabs: [
            { name: "Cart-Based Color Doppler", link: "#cart-based" },
            { name: "Portable Color Doppler", link: "#portable" },
            { name: "Handheld Ultrasound", link: "#handheld" },
            { name: "B/W Ultrasound", link: "#bw-ultrasound" }
        ]
    },
    monitoring: {
        title: "Patient Monitoring",
        subtitle: "CLINICAL-GRADE MONITORING FROM SPOT-CHECKS TO SURVEILLANCE",
        desc: "Clinical-grade monitoring from spot-checks to centralized surveillance, powered by proprietary technologies and innovations for uncompromised reliability.",
        image: "../img/MonitorPatient-iM20-Putih.jpg",
        gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
        activeColorClass: "bg-success",
        tabs: [
            { name: "Modular Patient Monitor", link: "#modular" },
            { name: "Compact Patient Monitor", link: "#compact" },
            { name: "Vital Signs", link: "#vital-signs" },
            { name: "Telemetry & IT", link: "#telemetry" }
        ]
    },
    ecg: {
        title: "Diagnostic ECG",
        subtitle: "CHINA'S NO. 1 ECG SUPPLIER SINCE 2006",
        desc: "Unparalleled complete portfolio, spanning resting, stress, Holter, remote diagnosis, and AI-driven innovations.",
        image: "../img/ECG-SE-12Series-Product-Putih.jpg",
        gradient: "linear-gradient(135deg, #f1c40f 0%, #d35400 100%)",
        activeColorClass: "bg-warning",
        tabs: [
            { name: "Resting ECG", link: "#resting-ecg" },
            { name: "Stress Test", link: "#stress-test" },
            { name: "Holter", link: "#holter" },
            { name: "Wireless Solution", link: "#wireless" },
            { name: "ECG Workstation", link: "#workstation" }
        ]
    },
    obgyn: {
        title: "Obstetrics & Gynecology",
        subtitle: "CARING FOR HER, AT EVERY STAGE OF LIFE",
        desc: "One joyful, healthy woman at a time, to make a world where every woman, at every stage of her remarkable journey, can thrive.",
        image: "../img/OB&GYN-AcclarixGX9F-Product-Putih.jpg",
        gradient: "linear-gradient(135deg, #e84393 0%, #d63031 100%)",
        activeColorClass: "bg-danger",
        tabs: [
            { name: "Obstetrics", link: "#obstetrics" },
            { name: "Gynecology", link: "#gynecology" },
            { name: "Pelvic Floor Rehabilitation", link: "#pelvic-floor" }
        ]
    }
};

// Function Switcher Produk Tanpa Reload
function switchProduct(productKey) {
    const data = productData[productKey];
    if (!data) return;

    // 1. Update Sub-Nav active state (Custom Translucent Styling)
    document.querySelectorAll('.product-subnav-btn').forEach(btn => {
        btn.style.setProperty('background-color', 'transparent', 'important');
        btn.classList.remove('text-white', 'fw-bold');
        btn.classList.add('text-white-50', 'fw-semibold');
    });

    const activeBtn = document.querySelector(`[data-product="${productKey}"]`);
    if (activeBtn) {
        // Ambil warna utama berdasarkan kategori
        const colorMap = {
            poct: '#00b4d8',
            ivd: '#f39c12',
            ultrasound: '#3498db',
            monitoring: '#2ecc71',
            ecg: '#f1c40f',
            obgyn: '#e84393'
        };
        const activeColor = colorMap[productKey] || '#00b4d8';
        activeBtn.style.setProperty('background-color', activeColor, 'important');
        activeBtn.classList.add('text-white', 'fw-bold');
        activeBtn.classList.remove('text-white-50', 'fw-semibold');
    }

    // 2. Update Hero Banner Elements
    const heroCard = document.getElementById('hero-card');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroDesc = document.getElementById('hero-desc');
    const heroImg = document.getElementById('hero-img');
    const heroTabsContainer = document.getElementById('hero-tabs-container');

    if (heroCard) heroCard.style.background = data.gradient;
    if (heroTitle) heroTitle.textContent = data.title;
    if (heroSubtitle) heroSubtitle.textContent = data.subtitle;
    if (heroDesc) heroDesc.textContent = data.desc;
    if (heroImg) heroImg.src = data.image;

    // 3. Update Sub-category Anchor Tabs
    if (heroTabsContainer) {
        let tabsHTML = '';
        data.tabs.forEach((tab, index) => {
            const isFirst = index === 0;
            const activeTabStyle = isFirst ? 'fw-bold border-bottom border-2 border-primary' : 'text-muted fw-semibold';
            tabsHTML += `<a href="${tab.link}" class="text-decoration-none fs-5 mx-2 ${activeTabStyle}">${tab.name}</a>`;
            if (index < data.tabs.length - 1) {
                tabsHTML += `<span class="text-muted">•</span>`;
            }
        });
        heroTabsContainer.innerHTML = tabsHTML;
    }
}

// Event Listener pas DOM siap
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-subnav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productKey = btn.getAttribute('data-product');
            switchProduct(productKey);
        });
    });
});