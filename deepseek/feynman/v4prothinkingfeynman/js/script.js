/* ============================================
   MAIN SCRIPT — Routing, rendering, interactions
   ============================================ */

(function () {
    'use strict';

    // --- DOM Elements ---
    const mainContent = document.getElementById('mainContent');
    const categoryList = document.getElementById('categoryList');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // --- State ---
    let currentView = 'home';
    let currentCategory = null;
    let currentPost = null;
    let previousView = 'home';
    let previousCategory = null;

    // --- Render Category List ---
    function renderCategoryList() {
        categoryList.innerHTML = '';
        categories.forEach(cat => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'category-link';
            a.href = '#';
            a.dataset.category = cat.id;
            a.innerHTML = `${cat.icon} ${cat.name} <span class="category-count">(${getPostCount(cat.id)})</span>`;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToCategory(cat.id);
            });
            li.appendChild(a);
            categoryList.appendChild(li);
        });

        // "Tümü" link at top
        const allLi = document.createElement('li');
        const allA = document.createElement('a');
        allA.className = 'category-link';
        allA.href = '#';
        allA.dataset.category = 'all';
        allA.textContent = '📋 Tüm Yazılar';
        allA.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToHome();
        });
        allLi.appendChild(allA);
        categoryList.insertBefore(allLi, categoryList.firstChild);
    }

    function getPostCount(categoryId) {
        return posts.filter(p => p.category === categoryId).length;
    }

    function setActiveCategoryLink(categoryId) {
        document.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === categoryId) {
                link.classList.add('active');
            }
        });
    }

    // --- Render Posts ---
    function renderPostCards(postsToRender, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        postsToRender.forEach(post => {
            const card = document.createElement('article');
            card.className = 'post-card';
            card.innerHTML = `
                <span class="post-card-category">${getCategoryName(post.category)}</span>
                <h3 class="post-card-title">${post.title}</h3>
                <p class="post-card-excerpt">${post.excerpt}</p>
                <span class="post-card-date">${post.date}</span>
                <span class="post-card-arrow">→</span>
            `;
            card.addEventListener('click', () => navigateToPost(post.id));
            container.appendChild(card);
        });
    }

    function getCategoryName(categoryId) {
        const cat = categories.find(c => c.id === categoryId);
        return cat ? cat.name : categoryId;
    }

    // --- Render Full Post ---
    function renderFullPost(post) {
        const container = document.getElementById('postFull');
        if (!container) return;
        container.innerHTML = `
            <span class="post-full-category">${getCategoryName(post.category)}</span>
            <h1 class="post-full-title">${post.title}</h1>
            <p class="post-full-date">${post.date}</p>
            <div class="post-full-body">${post.content}</div>
            <div class="post-full-doodle">
                <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
                    <path d="M10 20 Q50 5 100 20 Q150 35 190 20" stroke="#e8c547" stroke-width="0.8" fill="none" opacity="0.4"/>
                    <text x="100" y="32" text-anchor="middle" font-family="Caveat, cursive" font-size="9" fill="#c4bda0" opacity="0.5">~ Feynman'ın Defterinden</text>
                </svg>
            </div>
        `;
    }

    // --- Navigation ---
    function navigateToHome() {
        previousView = currentView;
        currentView = 'home';
        currentCategory = null;
        currentPost = null;
        setActiveCategoryLink('all');
        showView('view-home');
        renderPostCards(posts.slice(0, 6), 'recentPosts');
        document.querySelector('.site-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateURL('');
    }

    function navigateToCategory(categoryId) {
        previousView = currentView;
        previousCategory = currentCategory;
        currentView = 'category';
        currentCategory = categoryId;
        currentPost = null;
        setActiveCategoryLink(categoryId);
        const filteredPosts = posts.filter(p => p.category === categoryId);
        const cat = categories.find(c => c.id === categoryId);
        document.getElementById('categoryTitle').textContent = cat ? cat.name : 'Kategori';
        showView('view-category');
        renderPostCards(filteredPosts, 'categoryPosts');
        document.getElementById('categoryTitle').scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateURL('category/' + categoryId);
    }

    function navigateToPost(postId) {
        previousView = currentView;
        previousCategory = currentCategory;
        currentView = 'post';
        currentPost = postId;
        const post = posts.find(p => p.id === postId);
        if (!post) return;
        showView('view-post');
        renderFullPost(post);
        document.querySelector('.post-full')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateURL('post/' + postId);
    }

    function goBack() {
        if (currentView === 'post') {
            if (previousView === 'category' && previousCategory) {
                navigateToCategory(previousCategory);
            } else {
                navigateToHome();
            }
        } else if (currentView === 'category') {
            navigateToHome();
        }
    }

    function showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const view = document.getElementById(viewId);
        if (view) view.classList.add('active');
    }

    function updateURL(path) {
        const base = window.location.pathname.replace(/\/$/, '');
        const newUrl = path ? base + '#/' + path : base;
        history.pushState(null, '', newUrl);
    }

    // --- Event Listeners ---
    document.addEventListener('click', (e) => {
        // Back buttons
        if (e.target.classList.contains('back-btn') || e.target.closest('.back-btn')) {
            e.preventDefault();
            const btn = e.target.classList.contains('back-btn') ? e.target : e.target.closest('.back-btn');
            if (btn.dataset.route === 'home') {
                navigateToHome();
            } else {
                goBack();
            }
        }
        // Logo link
        if (e.target.closest('.logo-link')) {
            e.preventDefault();
            navigateToHome();
        }
    });

    // Mobile menu
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    });

    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when a category is clicked on mobile
    categoryList.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeSidebar();
        }
    });

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash;
        if (hash.startsWith('#/post/')) {
            const postId = hash.replace('#/post/', '');
            const post = posts.find(p => p.id === postId);
            if (post) {
                previousView = currentView;
                currentView = 'post';
                currentPost = postId;
                showView('view-post');
                renderFullPost(post);
                return;
            }
        } else if (hash.startsWith('#/category/')) {
            const catId = hash.replace('#/category/', '');
            const cat = categories.find(c => c.id === catId);
            if (cat) {
                navigateToCategorySilent(catId);
                return;
            }
        }
        navigateToHomeSilent();
    });

    function navigateToHomeSilent() {
        currentView = 'home';
        currentCategory = null;
        currentPost = null;
        setActiveCategoryLink('all');
        showView('view-home');
        renderPostCards(posts.slice(0, 6), 'recentPosts');
    }

    function navigateToCategorySilent(categoryId) {
        currentView = 'category';
        currentCategory = categoryId;
        currentPost = null;
        setActiveCategoryLink(categoryId);
        const filteredPosts = posts.filter(p => p.category === categoryId);
        const cat = categories.find(c => c.id === categoryId);
        document.getElementById('categoryTitle').textContent = cat ? cat.name : 'Kategori';
        showView('view-category');
        renderPostCards(filteredPosts, 'categoryPosts');
    }

    // --- Keyboard shortcuts ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (currentView !== 'home') {
                goBack();
            }
            closeSidebar();
        }
    });

    // --- Initialize ---
    function init() {
        renderCategoryList();
        setActiveCategoryLink('all');
        renderPostCards(posts.slice(0, 6), 'recentPosts');

        // Handle initial URL hash
        const hash = window.location.hash;
        if (hash.startsWith('#/post/')) {
            const postId = hash.replace('#/post/', '');
            const post = posts.find(p => p.id === postId);
            if (post) {
                currentView = 'post';
                currentPost = postId;
                showView('view-post');
                renderFullPost(post);
                return;
            }
        } else if (hash.startsWith('#/category/')) {
            const catId = hash.replace('#/category/', '');
            const cat = categories.find(c => c.id === catId);
            if (cat) {
                navigateToCategorySilent(catId);
                return;
            }
        }
    }

    init();
})();