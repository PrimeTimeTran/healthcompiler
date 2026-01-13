/**
 * HealthCompiler Theme - Main JavaScript
 */

;(function () {
  'use strict'

  // Mobile Navigation Toggle
  function initMobileNav() {
    const toggle = document.querySelector('.hc-header__mobile-toggle')
    const nav = document.querySelector('.hc-header__nav')

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('hc-header__nav--open')
        toggle.setAttribute(
          'aria-expanded',
          nav.classList.contains('hc-header__nav--open')
        )
      })

      // Close mobile nav when clicking outside
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('hc-header__nav--open')
          toggle.setAttribute('aria-expanded', 'false')
        }
      })
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href')
        if (targetId === '#') return

        const target = document.querySelector(targetId)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })
  }

  // Animate elements on scroll
  function initScrollAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]')

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('hc-animate-fade')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      animateElements.forEach(function (el) {
        el.style.opacity = '0'
        observer.observe(el)
      })
    } else {
      // Fallback for older browsers
      animateElements.forEach(function (el) {
        el.classList.add('hc-animate-fade')
      })
    }
  }

  // Header scroll behavior
  function initHeaderScroll() {
    const header = document.querySelector('.hc-header')
    if (!header) return

    let lastScroll = 0

    window.addEventListener(
      'scroll',
      function () {
        const currentScroll = window.pageYOffset

        if (currentScroll > 100) {
          header.classList.add('hc-header--scrolled')
        } else {
          header.classList.remove('hc-header--scrolled')
        }

        lastScroll = currentScroll
      },
      { passive: true }
    )
  }

  // Form validation
  function initFormValidation() {
    const forms = document.querySelectorAll('.hc-form')

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        const requiredFields = form.querySelectorAll('[required]')
        let isValid = true

        requiredFields.forEach(function (field) {
          if (!field.value.trim()) {
            isValid = false
            field.classList.add('hc-form__field--error')
          } else {
            field.classList.remove('hc-form__field--error')
          }
        })

        if (!isValid) {
          e.preventDefault()
        }
      })
    })
  }

  // Initialize all functions when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav()
    initSmoothScroll()
    initScrollAnimations()
    initHeaderScroll()
    initFormValidation()
  })
})()
